import "./app.scss";
import { Header } from "../header/header";
import { Footer } from "./../footer/footer";
import { Slider } from "./../slider/slider";
import { ArticleList } from "../articles-list/article-list";
import { Filter } from "./../filter/filter";
import { useState, useEffect } from "react";
import { downloadArticles } from "../../services/api";
import { useFilter } from "../utils/utils";

export function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [articles, setArticles] = useState([]);
  const [filters, setFilters] = useState({
    author: "Выбор автора",
    dateBefore: new Date('01.01.1970'),
    dateAfter: new Date(),
  });

  const fetchData = async () => {
    const articlesList = await downloadArticles();
    setArticles(articlesList.articles);
    setIsDataLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Slider />
      <Filter articles={articles} filters={filters} setFilters={setFilters} />
      <ArticleList
        isDataLoaded={isDataLoaded}
        articles={useFilter(articles, filters)}
        filters={filters}
        setFilters={setFilters}
      />
      <Footer />
    </div>
  );
}
