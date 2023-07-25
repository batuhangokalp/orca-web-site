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
const productsData = [
  {
    id: "1",
    productName: "Test 1",
    productSlogan: "Lorem Ipsum 1",
    productExplain:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue blandit vulputate. Proin eleifend molestie ligula vitae tincidunt. Integer nulla sem, mattis eu nisl id, imperdiet tristique felis. Ut et sollicitudin nibh",
    imgSrc: "/pictures/productimage.png",
    imgAlt: "image, picture, product",
    imgWidth: 200,
    imgHeight: 200,
  },
  {
    id: "2",
    productName: "Test 2",
    productSlogan: "Lorem Ipsum 2",
    productExplain:
      "Phasellus tincidunt augue felis, sed sagittis dui tincidunt nec. Donec ex nisl, euismod a pellentesque a, malesuada sed sapien. In ipsum turpis, ornare nec ante at, posuere ornare velit.",
      imgSrc: "/pictures/productimage.png",
      imgAlt: "image, picture, product",
      imgWidth: 200,
      imgHeight: 200,
  },
];
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
  // let productsData = [];
  // const res = await fetch(`http://localhost:3008/api/products`);
  // productsData = await res.json();
  return {
    props: {
      productsData,
    },
  };
};
