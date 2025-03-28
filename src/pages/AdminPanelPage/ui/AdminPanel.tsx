import { classNames } from '@/shared/lib/classNames/classNames';

interface AdminPanelProps {
    className?: string;
}

const AdminPanel = ({ className }: AdminPanelProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            админ панель
        </div>
    );
};

export default AdminPanel;
