import styles from "./app.module.scss";
import Article, { IArticleProps } from "./components/article/Article";
import Header from "./components/layouts/header/Header";

const articles: IArticleProps[] = [
  { title: "first", body: "this is the first article" },
  { title: "second", body: "this is the second article" },
];
function App() {
  return (
    <div className={styles.app}>
      <Header />
      {articles.map((article, index) => (
        <Article {...article} />
      ))}
    </div>
  );
}

export default App;
