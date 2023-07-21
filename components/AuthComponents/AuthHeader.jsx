import React from "react";
import Header from "../GlobalComponents/Header";
import styles from "../../styles/Auth.module.css";

const LoginHeader = ({heading,description}) => {
  return (
    <div className={styles.authHeader}>
      <Header />
      <div className={styles.heading}>
        <h1>{heading} </h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default LoginHeader;
