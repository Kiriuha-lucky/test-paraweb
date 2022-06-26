import './slider.scss';

export function Slider() {

  return (
    <section className="slider">
      <section className="slider__slide slide">
        <div className="slide__wrapper">
          <h3 className="slide__title">
            Как бизнесу сохранить IT-кадры на фоне кризиса
          </h3>
          <p className="slide__text">
            Инструменты, которые могут использовать компании для удержания сотрудников
          </p>
          <a href="#" className="slide__btn">Подробнее</a>
        </div>

      </section>
      <ul className="slider__dots-list">
        <li className="slider__dots-item slider__dots-item--active"></li>
        <li className="slider__dots-item"></li>
        <li className="slider__dots-item"></li>
      </ul>
    </section >
  );
}

