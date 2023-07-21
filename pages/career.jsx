import Meta from "@/components/GlobalComponents/Meta";
import styles from "../styles/Home.module.css";
import CareerHeader from "@/components/CareerPageComponents/CareerHeader";
import { Footer } from "@/components/GlobalComponents/Footer";
import CareerContent from "@/components/CareerPageComponents/CareerContent";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import MyContext from "@/context/MyContext";
import { MetaDescriptionCareer, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const Career = () => {

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
        title="Career"
        description={MetaDescriptionCareer}
        keywords={MetaKeywords}
      />
      <div className={styles.container}>
        <CareerHeader />
        <CareerContent />
        <Footer />
      </div>
    </>
  );
};

export default Career;
