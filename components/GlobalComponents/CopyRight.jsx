import React from "react";
import styles from "../../styles/Home.module.css";
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import Link from "next/link";

const CopyRight = () => {
  return (
    <div className={styles.copyRight}>
      <div className={styles.socialInfo}>
        <Link href="https://www.linkedin.com/company/orca-business-solutions">
          <GrLinkedin color="#9B9B9B" size={30} />
        </Link>
        <Link href="https://github.com/OrcaBusinessSolution">
          <GrGithub color="#9B9B9B" size={30} />
        </Link>
        <Link href="https://facebook.com/orcabs">
          <GrFacebook color="#9B9B9B" size={30} />
        </Link>
      </div>
      <p>Copyright @2023 Orca Business Solutions Ltd. - All rights reserved</p>
    </div>
  );
};

export default CopyRight;
