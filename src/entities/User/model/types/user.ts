import { UserRole } from '../const/const';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: UserRole[];
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
