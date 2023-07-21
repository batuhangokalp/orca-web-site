import React from "react";
import styles from "../../styles/Home.module.css";

import NavIntegratedComponent from "./NavIntegratedComponent";

const NavIntegratedProjects = () => {
  return (
    <div className={styles.integratedProjects}>
      <div className={styles.integratedProjectsContent}>
        <div className={styles.integratedProjectsHeading}>
          <div>
            <h1>Microsoft Dynamics NAV Integrated Projects</h1>
            <div className={styles.rectangleLarge}></div>
          </div>

          <span>Please contact our team to get more information</span>
        </div>
        <div className={styles.integratedProjectsPricing}>
          <NavIntegratedComponent
            title="Basic"
            price="$59/"
            explain="All the basics for businesses that are just getting started"
            firstProperty="Single Project Use"
            secondProperty="Unlimited User Authentication"
            thirdProperty="Unlimited data history & seats"
            fourthProperty="Monitoring & alerts"
            fifthProperty="Basic Roles and Permissions"
          />
          <NavIntegratedComponent
            title="Standard"
            price="$99/"
            explain="Suitable for Standard startups with advanced requirements"
            firstProperty="All features Basic"
            secondProperty="Advanced Dashboard"
            thirdProperty="Unlimited Roles & Permission"
            fourthProperty="1 Enterprise integration"
            fifthProperty="External API management"
          />
          <NavIntegratedComponent
            title="Premium"
            price="$129/"
            explain="Suitable for Large Business or Enterprise companies "
            firstProperty="Every Thing in Standard"
            secondProperty="Advanced access controls"
            thirdProperty="Dedicated SaaS solutions"
            fourthProperty="24/7 Support "
            fifthProperty="Dedicated customer success"
          />
        </div>
      </div>
    </div>
  );
};

export default NavIntegratedProjects;
