import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { DropdownDirection } from 'shared/types/ui';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

const mapDirectionClasses: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}


export const ListBox = (props: ListBoxProps) => {
    const { items, className, value, defaultValue, onChange, readonly, direction = 'top left', label } = props;

    const optionsClasses = mapDirectionClasses[direction];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox disabled={readonly} as={'div'} className={cls.ListBox} value={value} onChange={onChange}>
                <HListBox.Button disabled={readonly} className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, [optionsClasses])}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    },
                                )}>
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
