import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequireAuth = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some(requireRole => {
            const hasRole = userRoles?.includes(requireRole);
            return hasRole;
        });

    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequireAuth) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }


    return children;
}
