import './articles-list.scss';
import { Article } from '../article/article';

export function ArticleList() {

  return (
    <ul className="articles-list">
      <li><Article /></li>
      <li><Article /></li>
      <li><Article /></li>
      <li><Article /></li>
      <li><Article /></li>
      <li><Article /></li>
    </ul>
  );
}

