import './header.scss';

export function Header() {

  return (
    <header className="page-header">
      <div className='page-header__wrapper'>
        <img src="/img/logo.svg" alt="logo" width={97} height={24} className="page-header__logo" />
        <ul className="page-header__contacts-list">
          <li className="page-header__contacts-item"><a href="tel:+88000000000" className='page-header__contacts-link page-header__contacts-link--phone'><span>8 800 000 00 00</span> </a></li>
          <li className="page-header__contacts-item"><a href="mailto:sales@logo.ru" className='page-header__contacts-link page-header__contacts-link--mail'><span>sales@logo.ru</span> </a></li>
        </ul>
      </div>
    </header>
  );
}

