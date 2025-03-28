import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import {
    EditableProfileCardHeader,
} from '@/features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader';


interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap={'16'} max>
                <EditableProfileCardHeader />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
