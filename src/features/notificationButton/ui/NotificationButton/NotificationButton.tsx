import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import React, { memo, useCallback, useState } from 'react';
import { Popover } from '@/shared/ui/Popups';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';

interface NotificationButton {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButton) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );


    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    trigger={trigger}>
                    <NotificationList className={cls.notification} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
});
