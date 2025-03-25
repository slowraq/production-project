import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { memo } from 'react';
import { Notification } from '../../model/types/notification';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

interface NotificationItem {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItem) => {
    const { className, item } = props;

    let content = (<Card theme={CardTheme.OUTLINED} className={classNames(cls.NotificationItem, {}, [className])}>
        <Text title={item.title} text={item.description} /> )\
    </Card>);

    if (item.href) {
        return (
            <a className={cls.link} target={'__blank'} href={item.href} rel={'noreferrer'}>
                {content}
            </a>
        );
    }

    return content;
});
