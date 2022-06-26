import './article.scss';

export function Article() {

  return (
    <article className="article">
      <p className="article__date">12 июня 2022</p>
      <h3 className="article__title">Заголовок статьи</h3>
      <p className="article__text">
        Краткое описание статьи или ее начало. Может занимать больше трех строк в высоту. В таком случае предложение заканчивается многоточием...
      </p>
      <button className="article__btn">Иван Иванов</button>
    </article>
  );
}

