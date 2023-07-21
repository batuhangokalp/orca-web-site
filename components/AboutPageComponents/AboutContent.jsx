import Link from "next/link";
import React from "react";
import styles from "../../styles/About.module.css";

const AboutContent = () => {
  return (
    <div className={styles.aboutContent}>
      <div>
        <span>ABOUT OUR COMPANY</span>
        <div className={styles.rectangle}></div>
        <div className={styles.whatWeDo}>What We Do</div>
      </div>
      <div className={styles.aboutText}>
        <span>
          Orca Business Solutions is a IT business solutions provider and works
          with different sized companies throughout the Europe and Middle East.
          We offer a full range of consultancy, IT services and business
          management solutions.
          <br /> We are Microsoft Dynamics partner in the UK. As a software
          company and a Microsoft Dynamics Partner, we offer cost-effective
          business management and IT managed solutions that help to reach your
          business targets.
        </span>
      </div>
      <div className={styles.visionAndMission}>
        <div className={styles.visionAndMissionHeading}>
          Our Vision And Mission
        </div>
        <div className={styles.visionAndMissionContent}>
          <div className={styles.ourMissionAndVision}>
            <h3>Our Mission</h3>
            <span>
              Our main business objectives our customers innovative,
              result-driven, qualified business solutions to assist them for
              managing their daily tasks and realising their business objectives
              and how to achieve their goals.
            </span>
          </div>
          <div className={styles.ourMissionAndVision}>
            <h3>Our Vision</h3>
            <span>
              Our main business objectives our customers innovative,
              result-driven, qualified business solutions to assist them for
              managing their daily tasks and realising their business objectives
              and how to achieve their goals.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.introduction}>
        <div className={styles.aboutDevelopment}>
          <h1>Microsoft Dynamics NAV (Navision)</h1>
          <span>
            Orca Business Solutions is a certified Microsoft Dynamics NAV
            (Navision) partner. Microsoft Dynamics NAV (Navision) is an
            enterprise resource planning (ERP) software product. <br />
            <br /> Today, more than 117,000 customers are using Microsoft
            Dynamics NAV in more than 40 countries to drive business success and
            stay ahead of competition.
          </span>
          <div className={styles.aboutDevelopmentLearnMoreBtn}>
            <Link href="#">
              <h4>Learn More</h4>
            </Link>
          </div>
        </div>
        <div className={styles.aboutDevelopment}>
          <h1>Bespoke Software Development</h1>
          <span>
            Today software applications are used by small to large sized
            companies to save time and money. Managing your business via
            tailored software applications renders your company more valuable
            and active.
            <br />
            <br /> Orca Business Solutions assists you to enhance your business
            quality by developing well designed applications. <br />
            <br />
            We develop Windows, IPad & IPhone and Web applications whatever your
            business is.
          </span>
          <div className={styles.aboutDevelopmentLearnMoreBtn}>
            <Link href="#">
              <h4>Learn More</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
