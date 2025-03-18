import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { isLoading, data } = useArticleRecommendationsList(4);

    if (isLoading || !data) {
        return null;
    }

    return (
        <VStack gap={'16'} className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={'Рекомендуем'}
            />
            <ArticleList
                isLoading={isLoading}
                articles={data}
                target="_blank"
            />
        </VStack>
    );
});
