import Meta from "@/components/GlobalComponents/Meta";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import ProductsHeader from "@/components/ProductPageComponents/GlobalComponents/ProductHeader";
import { Footer } from "@/components/GlobalComponents/Footer";
import ProductsContent from "@/components/ProductPageComponents/GlobalComponents/ProductsContent";
import { useContext, useEffect } from "react";
import MyContext from "@/context/MyContext";
import { MetaDescriptionProducts, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const Products = ({ products }) => {

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
  let products = [];
  const res = await fetch(`http://localhost:3008/api/products`);
  products = await res.json();
  return {
    props: {
      products,
    },
  };
};