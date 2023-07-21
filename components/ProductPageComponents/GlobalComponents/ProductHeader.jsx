import styles from "../../../styles/Products.module.css";
import Header from "../../GlobalComponents/Header";

const ProductsHeader = () => {
  return (
    <div className={styles.productsHeader}>
      <Header />
      <div className={styles.heading}>
        <h1>PRODUCTS </h1>
      </div>
    </div>
  );
};

export default ProductsHeader;
