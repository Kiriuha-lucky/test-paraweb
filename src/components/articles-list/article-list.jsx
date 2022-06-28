import "./articles-list.scss";
import { Article } from "../article/article";
import { Spinner } from "../spinner/spinner";

export function ArticleList({ isDataLoaded, articles, setFilters, filters }) {
  if (!isDataLoaded) {
    return <Spinner />;
  }

  return (
    <ul className="articles-list">
      {articles.map((article) => (
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
