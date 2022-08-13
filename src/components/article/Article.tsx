import styles from "./article.module.scss";

export interface IArticleProps {
    title: string;
    body: string;
}

const Article = ({ title, body }: IArticleProps) => {
  return (
    <div className={styles.article}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Article;