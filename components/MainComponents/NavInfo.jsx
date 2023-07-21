import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";

const NavInfo = () => {
  return (
    <div className={styles.navInfo}>
      <div className={styles.contentNav}>
        <h1>MICROSOFT DYNAMICS NAV INTEGRATION</h1> <br />
        <br /><br />
        <span>
          Microsoft Dynamics NAV is an enterprise resource planning app, part of
          Microsoft Dynamics. It is a tool to enable businesses to deal with
          their financial transactions, CRM, supply chain operations and other
          commercial analytics online.
        </span>
        <br />
        <br />
        <br />
        <span>
          Microsoft is a global software brand, famous as the brainchild of
          billionaire Bill Gates. Microsoft Dynamics NAV uses Windows,
          SharePoint and web client software to enable customers to access and
          manage complex business data drawn from online shop portals.
        </span>
        <br />
        <br />
        <br />
        <span>
          Microsoft Dynamics NAV provides business management solutions
          specifically designed for smaller eCommerce retailers. It integrates
          with Despatch Cloud’s multi-channel software allowing you to combine
          data from shipping companies or marketplaces in one place. Suppose
          your business is running Microsoft Dynamics NAV. In that case, you
          will already be able to automate sales and purchasing as well as
          inventory cross-checks - so why not fully synergise your systems?
        </span>
        <br />
      </div>
    </div>
  );
};

export default NavInfo;
