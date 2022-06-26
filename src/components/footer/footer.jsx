import './footer.scss';

export function Footer() {

  return (
    <footer className="page-footer">
      <div className='page-footer__wrapper'>
        <img src="/img/logo-white.svg" alt="logo" width={97} height={24} className="page-footer__logo" />
        <ul className="page-footer__nav-list">
          <li className="page-footer__nav-item"><a href="#" className="page-footer__link">Готовые решения</a></li>
          <li className="page-footer__nav-item"><a href="#" className="page-footer__link">О нас</a></li>
          <li className="page-footer__nav-item"><a href="#" className="page-footer__link">Блог</a></li>
          <li className="page-footer__nav-item"><a href="#" className="page-footer__link">Контакты</a></li>
        </ul>
        <p className="page-footer__text">© ООО «Лого», 2008—2022</p>
        <ul className="page-footer__social-list">
          <li className="page-footer__social-item"><a href="#" className="page-footer__social-link page-footer__social-link--telegram"><span className="visually-hidden">telegram</span></a></li>
          <li className="page-footer__social-item"><a href="#" className="page-footer__social-link page-footer__social-link--vk"><span className="visually-hidden">vk</span></a></li>
          <li className="page-footer__social-item"><a href="#" className="page-footer__social-link page-footer__social-link--twitter"><span className="visually-hidden">twitter</span></a></li>
          <li className="page-footer__social-item"><a href="#" className="page-footer__social-link page-footer__social-link--youtube"><span className="visually-hidden">youtube</span></a></li>
        </ul>
      </div>
    </footer>
  );
}

