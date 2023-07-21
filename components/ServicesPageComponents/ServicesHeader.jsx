import React from "react";
import styles from "../../styles/Services.module.css";
import Header from "../GlobalComponents/Header";

const ServicesHeader = () => {
  return (
    <div className={styles.servicesHeader}>
      <Header />
      {/* <div className={styles.heading}>
        <h1>OUR SERVICES </h1>
      </div> */}
    </div>
  );
};

export default ServicesHeader;
