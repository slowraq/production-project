import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { ArticleList } from 'entities/Article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleInfiniteList {
    className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteList) => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return (
            <Text align={TextAlign.CENTER} title={'Ошибка при загрузке статей'} />
        );
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
