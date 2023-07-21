import styles from "../../styles/News.module.css";
import Header from "../GlobalComponents/Header";

const NewsHeader = () => {
  return (
    <div className={styles.newsHeader}>
      <Header />
      <div className={styles.heading}>
        <h1>NEWS </h1>
      </div>
    </div>
  );
};

export default NewsHeader;
