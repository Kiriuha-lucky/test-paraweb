export function getAuthors(articles) {
  const uniqueAuthors = [];

  articles.map((article) => {
    if (article.author === null && !uniqueAuthors.includes("Unknown")) {
      uniqueAuthors.push("Unknown");
    }

    if (!uniqueAuthors.includes(article.author) && article.author !== null) {
      uniqueAuthors.push(article.author);
    }
  });

  return uniqueAuthors.sort();
}

export function trimText(text, length) {
  if (text.length < length) {
    return text;
  }

  return `${text.slice(0, length)}...`;
}

export function formatArticleDate(date) {
  return new Date(date)
    .toLocaleString("ru", { day: "numeric", month: "long", year: "numeric" })
    .replace(/\s*г\./, "");
}

export function useFilter(articles, filters) {
  const author = filters.author === 'Unknown' ? null : filters.author;
  const dateBefore = filters.dateBefore;
  const dateAfter = filters.dateAfter;

  if (author === "Выбор автора") {
    return articles.filter(
      (article) =>
        new Date(article.publishedAt) < dateAfter &&
        new Date(article.publishedAt) > dateBefore
    );
  }

  return articles.filter(
    (article) =>
      new Date(article.publishedAt) < dateAfter &&
      new Date(article.publishedAt) > dateBefore &&
      article.author === author
  );
}

export function formatDate(date) {
  var dd = date.getUTCDate();
  if (dd < 10) dd = "0" + dd;

  var mm = date.getUTCMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  var yy = date.getUTCFullYear();

  return dd + "." + mm + "." + yy;
}
