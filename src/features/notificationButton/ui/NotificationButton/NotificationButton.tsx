import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';

interface NotificationButton {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButton) => {
    const { className } = props;
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}>
            <NotificationList className={cls.notification} />
        </Popover>
    );
});
