import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { memo, ReactNode } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Portal } from '../ui/Portal/Portal';
import { Overlay } from '../ui/Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';


interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}


export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { theme } = useTheme();

    const { close: closeHandler, isClosing, isMounted } = useModal({
        animationDelay: 500,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }


    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={closeHandler} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
