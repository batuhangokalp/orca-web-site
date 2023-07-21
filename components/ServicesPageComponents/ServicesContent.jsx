import Link from "next/link";
import React from "react";
import styles from "../../styles/Services.module.css";

const ServicesContent = () => {
  return (
    <div className={styles.servicesContent}>
      <div className={styles.smallHeading}>
        <span> MS DYNAMICS NAV PROJECTS</span>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.servicesIntroduction}>
        <div className={styles.servicesIntroductionText}>
          <h1>Microsoft Dynamics NAV Integration</h1>
          <span>
            Orca Business Solutions uses the features of Dynamics NAV (Navision)
            environment to develop your bespoke routines to make better your
            business processes. Microsoft Dynamics NAV (Navision) is the
            complete business management solution which collects your business
            functions into one functional system.
            <br /> <br />
            Integration with Microsoft Dynamics NAV (Navision) is easy. Orca
            Business Solutions integrates your website with Microsoft Dynamics
            NAV (Navision). By incorporating our bespoke solution you will find
            it possible to integrate your system with POS devices which helps
            you to decrease the cost of your company.
          </span>
        </div>
        <div className={styles.servicesIntroductionBoxes}>
          <div className={styles.servicesIntroductions}>
            <h1>MS Dynamics NAV & E-Commerce Website Integration</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur. Dictum morbi imperdiet
              platea vitae. <br /> Odio amet malesuada morbi cum accumsan congue
              sit euismod hendrerit. <br /> Purus nulla non quis adipiscing enim
              egestas turpis mauris.
            </span>
            <div className={styles.btn}>
              <Link href="#">
                <span>Learn More</span>
              </Link>
            </div>
          </div>
          <div className={styles.servicesIntroductions}>
            <h1>MS Dynamics NAV & Mobile App Integration</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur. Dictum morbi imperdiet
              platea vitae. <br /> Odio amet malesuada morbi cum accumsan congue
              sit euismod hendrerit. <br /> Purus nulla non quis adipiscing enim
              egestas turpis mauris.
            </span>
            <div className={styles.btn}>
              <Link href="#">
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.smallHeading}>
        <span> SOFTWARE DEVELOPMENT</span>
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.servicesIntroduction}>
        <div className={styles.servicesIntroductionText}>
          <h1>Bespoke Software Development</h1>
          <span>
            Orca Business Solutions uses the features of Dynamics NAV (Navision)
            environment to develop your bespoke routines to make better your
            business processes. Microsoft Dynamics NAV (Navision) is the
            complete business management solution which collects your business
            functions into one functional system.<br/><br/> Integration with Microsoft
            Dynamics NAV (Navision) is easy. Orca Business Solutions integrates
            your website with Microsoft Dynamics NAV (Navision). By incorporating
            our bespoke solution you will find it possible to integrate your
            system with POS devices which helps you to decrease the cost of your
            company.
          </span>
        </div>
        <div className={styles.servicesIntroductionBoxes}>
          <div className={styles.servicesIntroductions}>
            <h1>XXXXXXXXXXXX</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur. Dictum morbi imperdiet
              platea vitae. <br /> Odio amet malesuada morbi cum accumsan congue
              sit euismod hendrerit. <br /> Purus nulla non quis adipiscing enim
              egestas turpis mauris.
            </span>
            <div className={styles.btn}>
              <Link href="#">
                <span>Learn More</span>
              </Link>
            </div>
          </div>
          <div className={styles.servicesIntroductions}>
            <h1>XXXXXXXXXXXX</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur. Dictum morbi imperdiet
              platea vitae. <br /> Odio amet malesuada morbi cum accumsan congue
              sit euismod hendrerit. <br /> Purus nulla non quis adipiscing enim
              egestas turpis mauris.
            </span>
            <div className={styles.btn}>
              <Link href="#">
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default ServicesContent;
