import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1>
          ARE YOU LOOKING FOR <br />A NEW ERP SOFTWARE?
        </h1>
        <br />
        <div className={styles.rectangle}>
          <br />
        </div>
        <br />
        <br />
        <span>
          Enhance your processes and <br /> manage your business easily.
        </span>
        <br />
        <br />
        <div className={styles.mainServicesBtn}>
          <Link href="/services">
            <h4>Our Services</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
