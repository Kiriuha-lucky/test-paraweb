import "./articles-list.scss";
import { Article } from "../article/article";
import { Spinner } from "../spinner/spinner";

export function ArticleList({ isDataLoaded, articles, setFilters, filters }) {
  if (!isDataLoaded) {
    return <Spinner />;
  }

  return (
    <ul className="articles-list">
      {articles.length === 0
        ? <h3 className="articles-list__text">Статьи с заданными параметрами не найдены</h3>
        : articles.map((article) => (
            <li
              key={article.title}
              onClick={() => setFilters({ ...filters, author: article.author })}
            >
              <Article article={article} />
            </li>
          ))}
    </ul>
  );
}
