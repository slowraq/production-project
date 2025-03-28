import { DropdownDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionClasses: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};
