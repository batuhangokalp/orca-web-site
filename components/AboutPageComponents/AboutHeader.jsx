import styles from "../../styles/About.module.css";
import Header from "../GlobalComponents/Header";

const AboutHeader = () => {
  return (
    <div className={styles.aboutHeader}>
      <Header />
      {/* <div className={styles.heading}>
        <h1>ABOUT US </h1>
      </div> */}
    </div>
  );
};

export default AboutHeader;
