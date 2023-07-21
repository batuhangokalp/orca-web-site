import React from "react";
import { Footer } from "@/components/GlobalComponents/Footer";
import styles from "../styles/Home.module.css";
import ServicesHeader from "@/components/ServicesPageComponents/ServicesHeader";
import AboutServicesImage from "@/components/GlobalComponents/AboutServicesImage";
import ServicesContent from "@/components/ServicesPageComponents/ServicesContent";
import Meta from "@/components/GlobalComponents/Meta";
import { useContext, useEffect } from "react";
import MyContext from "@/context/MyContext";
import { useRouter } from "next/router";
import { MetaDescriptionServices, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const Services = () => {

  const router = useRouter();
  const { myState } = useContext(MyContext);
  useEffect(() => {
    (myState == "") && handleRedirect()
  }, [])
  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <>
      <Meta
        title="Services"
        description={MetaDescriptionServices}
        keywords={MetaKeywords}
      />
      <div className={styles.container}>
        <ServicesHeader />
        <AboutServicesImage />
        <ServicesContent />
        <Footer />
      </div>
    </>
  );
};

export default Services;
