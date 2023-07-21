import AboutContent from "@/components/AboutPageComponents/AboutContent";
import AboutHeader from "@/components/AboutPageComponents/AboutHeader";
import AboutServicesImage from "@/components/GlobalComponents/AboutServicesImage";
import { Footer } from "@/components/GlobalComponents/Footer";
import Meta from "@/components/GlobalComponents/Meta";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import MyContext from "@/context/MyContext";
import { MetaDescriptionAbout, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const About = () => {

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
        title="About"
        description={MetaDescriptionAbout}
        keywords={MetaKeywords}
      />
      <div className={styles.container}>
        <AboutHeader />
        <AboutServicesImage />
        <AboutContent />
        <Footer />
      </div>
    </>
  );
};

export default About;
