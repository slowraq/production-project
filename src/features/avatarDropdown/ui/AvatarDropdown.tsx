import cls from './AvatarDropdown.module.scss';
import React, { memo, useCallback } from 'react';
import { Dropdown } from '@/shared/ui/Popups';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AvatarDropdown {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdown) => {
    const { className } = props;
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: 'Админка',
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: 'Профиль',
                    href: RoutePath.profile + authData?.id,
                },
                {
                    onClick: onLogout,
                    content: 'Выйти',
                },
            ]}
            trigger={
                <Avatar
                    size={30}
                    src={authData?.avatar}
                />
            }
        />
    );
});
