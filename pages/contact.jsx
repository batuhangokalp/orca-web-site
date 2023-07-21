import ContactContent from "@/components/ContactPageComponents/ContactContent";
import ContactHeader from "@/components/ContactPageComponents/ContactHeader";
import { Footer } from "@/components/GlobalComponents/Footer";
import Meta from "@/components/GlobalComponents/Meta";
import React from "react";
import styles from "../styles/Home.module.css";
import { useContext, useEffect } from "react";
import MyContext from "@/context/MyContext";
import { useRouter } from "next/router";
import { MetaDescriptionContact, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const Contact = () => {

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
        title="Contact Us"
        description={MetaDescriptionContact}
        keywords={MetaKeywords}
      />
      <div className={styles.container}>
        <ContactHeader />
        <ContactContent />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
