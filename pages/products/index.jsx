import Meta from "@/components/GlobalComponents/Meta";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import ProductsHeader from "@/components/ProductPageComponents/GlobalComponents/ProductHeader";
import { Footer } from "@/components/GlobalComponents/Footer";
import ProductsContent from "@/components/ProductPageComponents/GlobalComponents/ProductsContent";
import { useContext, useEffect } from "react";
import MyContext from "@/context/MyContext";
import {
  MetaDescriptionProducts,
  MetaKeywords,
} from "@/components/GlobalComponents/MetaValues";

const products = [
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
const Products = ({ products }) => {
  const router = useRouter();
  const { myState } = useContext(MyContext);

  useEffect(() => {
    myState == "" && handleRedirect();
  }, []);
  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <>
      <Meta
        title="Products"
        description={MetaDescriptionProducts}
        keywords={MetaKeywords}
      />
      <div className={styles.container}>
        <ProductsHeader />
        <ProductsContent products={products} />
        <Footer />
      </div>
    </>
  );
};

export default Products;

export const getServerSideProps = async (context) => {
  // let products = [];
  // const res = await fetch(`http://localhost:3008/api/products`);
  // products = await res.json();
  return {
    props: {
      products,
    },
  };
};
