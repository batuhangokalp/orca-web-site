import styles from "../../styles/Career.module.css";
import Header from "../GlobalComponents/Header";

const CareerHeader = () => {
  return (
    <div className={styles.careerHeader}>
      <Header />
      <div className={styles.heading}>
        <h1>Career </h1>
      </div>
    </div>
  );
};

export default CareerHeader;
