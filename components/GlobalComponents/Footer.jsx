import React from "react";
import styles from "../../styles/Home.module.css";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import Link from "next/link";
import CopyRight from "./CopyRight";

export const Footer = () => {
  return (
    <div className={styles.totalFooter}>
      <div className={styles.footerInfo}>
        <div className={styles.usefulLinks}>
          <h4 className={styles.headerOfFooter}>USEFUL LINKS</h4>
          <ul>
            <li>
              <Link href="/about">About Us </Link>
            </li>
            <li>
              <Link href="/services">Services </Link>
            </li>
            <li>
              <Link href="/news">News </Link>
            </li>
            <li>
              <Link href="/career">Career </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerProducts}>
          <h4 className={styles.headerOfFooter}>PRODUCTS</h4>
          <ul>
            <li>OrcaOne</li>
            <li>OrcaPos</li>
            <li>ERP Solutions</li>
            <li>Orca Catering</li>
            <li>Orca Cash & Carry</li>
            <li>Website Integration</li>
            <li>MS Dynamics NAV Setup</li>
          </ul>
        </div>
        <div className={styles.contactInfo}>
          <h4 className={styles.headerOfFooter}>CONTACT US</h4>
          <br />
          <div className={styles.communication}>
            <BsWhatsapp color="#fff" size={20} />
            <span> &ensp; +11 222 333 44 55</span>
          </div>
          <br /> <br />
          <div className={styles.communication}>
            <AiOutlineMail color="#fff" size={20} />
            <span>&ensp;info@test.com</span>
          </div>
          <br />
          <br />
          <div className={styles.communication}>
            <ImLocation color="#fff" size={20} />
            &ensp;
            <span>
              Test.
              <br />
              2, Test Test Test
              <br /> Test Test <br />
              Test UNITED KINGDOM
            </span>
          </div>
          <br />
          {/* <div className={styles.smallCircle}></div>
          <div className={styles.largeCircle}></div> */}
        </div>
      </div>

      <CopyRight />
    </div>
  );
};
