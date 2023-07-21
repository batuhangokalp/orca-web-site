import React from "react";
import styles from "../../styles/Contact.module.css";
import Header from "../GlobalComponents/Header";

const ContactHeader = () => {
  return (
    <div className={styles.contactHeader}>
      <Header />
      {/* <div className={styles.heading}>
        <h1>Contact Us </h1>
      </div> */}
    </div>
  );
};

export default ContactHeader;
