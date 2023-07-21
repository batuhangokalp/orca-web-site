import { Footer } from "@/components/GlobalComponents/Footer";
import styles from "../styles/Home.module.css";
import NavInfo from "@/components/MainComponents/NavInfo";
import MainTop from "@/components/MainComponents/MainTop";
import NavIntegratedProjects from "@/components/MainComponents/NavIntegratedProjects";
import OrcaOneBenefits from "@/components/MainComponents/OrcaOneBenefits";
import Meta from "@/components/GlobalComponents/Meta";
import { useContext, useEffect} from "react";
import MyContext from "@/context/MyContext";
import { MetaDescriptionHome, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

export default function Home({ productsData }) {
  const { myState, updateState } = useContext(MyContext);

  useEffect(() => {
    updateState(productsData)
  }, []);

  return (
    <>
      <Meta
        title="Orca Business Solutions"
        description={MetaDescriptionHome}
        keywords={MetaKeywords}
      />
      <div className={styles.container}>
        <MainTop />
        <OrcaOneBenefits />
        <NavInfo />
        <NavIntegratedProjects />
        <Footer />
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  let productsData = [];
  const res = await fetch(`http://localhost:3008/api/products`);
  productsData = await res.json();
  return {
    props: {
      productsData,
    },
  };
};
