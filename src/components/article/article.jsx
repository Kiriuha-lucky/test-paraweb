import "./article.scss";
import { trimText, formatArticleDate } from "../utils/utils";

export function Article({ article }) {
  return (
    <article className="article">
      <p className="article__date">{formatArticleDate(article.publishedAt)}</p>
      <h3 className="article__title">{article.title}</h3>
      <p className="article__text">{trimText(article.description, 180)}</p>
      <button className="article__btn">
        {article.author ? article.author : "Unknown"}
      </button>
    </article>
  );
}
