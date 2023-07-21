import React from "react";
import styles from "../../styles/Home.module.css";
import Header from "../GlobalComponents/Header";
import Banner from "./Banner";
import Image from "next/image";

const MainTop = () => {
  return (
    <div className={styles.mainTop}>
      <Image
        src="/pictures/Header.jpg"
        alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
        fill
        cover="true"
        priority={true}
        quality={100}
      />
      <Header />
      <Banner />
    </div>
  );
};

export default MainTop;
