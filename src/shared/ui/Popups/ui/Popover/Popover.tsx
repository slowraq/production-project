import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClasses } from '../styles/const';
import popupCls from '../styles/popup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}


export const Popover = (props: PopoverProps) => {
    const { className, trigger, direction = 'top right', children } = props;

    const menuClasses = mapDirectionClasses[direction];
    console.log(menuClasses);
    const panelClasses = classNames(cls.panel, {}, [menuClasses]);
    console.log('Классы для Popover.Panel:', panelClasses);
    return (
        <HPopover as="div" className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>
            <HPopover.Panel className={panelClasses}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
