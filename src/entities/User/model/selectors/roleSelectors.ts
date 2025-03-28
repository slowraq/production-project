import { StateSchema } from '@/app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

import { UserRole } from '@/entities/User/model/const/const';


export const getUserRoles = (state: StateSchema) => state.user.authData?.role;

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(UserRole.ADMIN)),
);

export const isUserManager = createSelector(getUserRoles, (roles) =>
    Boolean(roles?.includes(UserRole.MANAGER)),
);
