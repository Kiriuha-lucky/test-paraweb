import "./filter.scss";
import { getAuthors } from "./../utils/utils";
import { useEffect, useState, useRef } from "react";

export function Filter({ articles, filters, setFilters }) {
  const [authors, setAuthors] = useState([]);
  const authorRef = useRef(null);
  const dateBeforeRef = useRef(null);
  const dateAfterRef = useRef(null);

  useEffect(() => {
    setAuthors(getAuthors(articles));
  }, [articles]);

  return (
    <section className="filter">
      <div className="filter__author-wrapper">
        <select
          className="filter__author"
          ref={authorRef}
          value={filters.author}
          onChange={() =>
            setFilters({ ...filters, author: authorRef.current.value })
          }
        >
          <option
            className="filter__author-option"
            defaultValue
          >
            Выбор автора
          </option>
          {authors.map((author) => (
            <option
              key={author}
              value={author}
              className="filter__author-option"
            >
              {author}
            </option>
          ))}
        </select>
      </div>

      <div className="filter__date-wrapper">
        <label htmlFor="date1" className="filter__date-label">
          От
          <input
            type="date"
            name="date1"
            className="filter__date"
            aria-required="true"
            aria-invalid="false"
            ref={dateBeforeRef}
            onChange={() =>
              setFilters({
                ...filters,
                dateBefore: new Date(dateBeforeRef.current.value),
              })
            }
            value={filters.dateBefore.toISOString().slice(0, 10)}
          />
        </label>
        <label htmlFor="date2" className="filter__date-label">
          - До
          <input
            type="date"
            name="date2"
            className="filter__date"
            aria-required="true"
            aria-invalid="false"
            ref={dateAfterRef}
            value={filters.dateAfter.toISOString().slice(0, 10)}
            onChange={() =>
              setFilters({
                ...filters,
                dateAfter: new Date(dateAfterRef.current.value),
              })
            }
          />
        </label>
      </div>
    </section>
  );
}
