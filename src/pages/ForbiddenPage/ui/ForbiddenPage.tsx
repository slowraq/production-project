import { Page } from 'widgets/Page/Page';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
    return (
        <Page>
            У вас нет доступа к этой странице
        </Page>
    );
};
