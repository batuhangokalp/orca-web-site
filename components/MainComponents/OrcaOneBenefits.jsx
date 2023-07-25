import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
const OrcaOneBenefits = () => {
  return (
    <div className={styles.orcaOneBenefitsContainer}>

      <div className={styles.orcaOneAppImage}>
        <Image
          src="/pictures/Kits.png"
          alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
          width={550}
          height={750}
          priority={true}
          quality={100}
        />
      </div>
      <div className={styles.orcaOneAppContent}>
        <div className={styles.orcaOneHeadings}>
          <h3>Complete solution for your business</h3>
          <h1>Orca One App thousands of benefits </h1>
          <span>
            There are variations of benefits offered to small and mid-level
            businesses. Benefits can vary depending on your state.
          </span>
        </div>
        <div className={styles.appFeatures}>
          <div className={styles.eachFeatures}>
            <div className={styles.orcaOneAppFeaturesLogo}>
              <div className={styles.firstFeatures}>
                <Image
                  src="/pictures/StockManagement.png"
                  alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            </div>

            <div className={styles.orcaOneAppFeaturesText}>
              <h3>Stock Management</h3>
              <span>
                Stock Tracking is never been easier. Just let the stopwatch run.
              </span>
            </div>
          </div>
          <div className={styles.eachFeatures}>
            <div className={styles.orcaOneAppFeaturesLogo}>
              <div >
              <Image
                  src="/pictures/Dashboard.png"
                  alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
            </div>
            <div className={styles.orcaOneAppFeaturesText}>
              <h3>Customizable dashboard</h3>
              <span>
                Customizable dashboards are a powerful way to report, keep track
                of data.
              </span>
            </div>
          </div>
          <div className={styles.moreInfoLink}>
            <Link href="/">
              <h4>More Informations</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrcaOneBenefits;
