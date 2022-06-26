import { useState } from 'react';
import { Context } from '../../services/context';
import './app.scss';
import { Header } from '../header/header';

export function App() {
  const [articles, setArticles] = useState([]);

  return (
    <Context.Provider value={[articles, setArticles]}>
      <div className='wrapper'>
        <Header />
      </div>
    </Context.Provider>
  );
}

