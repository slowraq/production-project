import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import cls from './Dropdown.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { mapDirectionClasses } from '../styles/const';
import popupCls from '../styles/popup.module.scss';

interface DropdownItems {
    content: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}


interface Dropdown {
    className?: string;
    items: DropdownItems[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}


export const Dropdown = ({ className, items, trigger, direction = 'top right' }: Dropdown) => {
    const menuClasses = mapDirectionClasses[direction];

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [menuClasses])}>
                {items.map(item => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(cls.item, { [popupCls.active]: active })}>
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
