import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import OrcaProductsHeader from "@/components/ProductPageComponents/GlobalComponents/OrcaProductsHeader";
import OrcaFacilities from "@/components/ProductPageComponents/GlobalComponents/OrcaFacilities";
import OrcaAbout from "@/components/ProductPageComponents/GlobalComponents/OrcaAbout";
import styles from "../../styles/Home.module.css";
import OrcaSlider from "@/components/ProductPageComponents/GlobalComponents/OrcaSlider";
import { Footer } from "@/components/GlobalComponents/Footer";
import Meta from "@/components/GlobalComponents/Meta";
import MyContext from "@/context/MyContext";
import { useContext } from "react";
import { MetaDescriptionProducts, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const ProductsDetail = ({ productsData}) => {

  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState();
  const { myState } = useContext(MyContext);


  useEffect(() => {
    const l_project = productsData.products.find((data) => {
      return data.id == Number(id);
    });
    setProject(l_project);
  }, []);

  useEffect(() => {
    (myState == "") && handleRedirect()
  }, [])

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <>
      <Meta
        title={project && project.productName}
        description={MetaDescriptionProducts}
        keywords={MetaKeywords}
      />
      <div className={styles.container}>
        <OrcaProductsHeader
          headerTitle={project && project.productName}
          headerExplain={project && project.headerExplain}
          headerImage={project && project.headerImagePath}
          headerImageWidth={project && project.headerImageWidth}
        />

        <OrcaFacilities
          FacilityHeader={project && project.facilityHeader}
          FacilityExplain={project && project.facilityExplain}
        />
        <OrcaAbout
          aboutImage={project && project.aboutImagePath}
          aboutSmallHeader={project && project.aboutSmallHeader}
          aboutLargeHeader={project && project.aboutLargeHeader}
        />

        <OrcaSlider
          sliderSmallHeader={project && project.sliderSmallHeader}
          sliderLargeHeader={project && project.sliderLargeHeader}
          firstImage={project && project.firstImagePath}
          secondImage={project && project.secondImagePath}
          thirdImage={project && project.thirdImagePath}
        />
        <Footer />
      </div>
    </>
  );
};

export default ProductsDetail;

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