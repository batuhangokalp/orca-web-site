import Meta from "../../GlobalComponents/Meta";
import styles from "../../../styles/Products.module.css";
import Link from "next/link";
import Image from "next/image";

const ProductsContent = ({ products }) => {
  console.log("products content", products);
  return (
    <>
      <Meta title="Products" />
      <div className={styles.allProductsDiv}>
        <div className={styles.products}>
          {products &&
            products.map((products) => {
              return (
                <div className={styles.firstProducts} key={products.id}>
                  <div className={styles.newsImage}>
                    <Image
                      src={products.imgSrc}
                      alt={products.imgAlt}
                      width={products.imgWidth}
                      height={products.imgHeight}
                      quality={100}
                    />
                  </div>
                  <h1>{products.productName}</h1>
                  <h6>{products.productSlogan}</h6>
                  <span>{products.productExplain}</span>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <div className={styles.btn}>
                      <div className={styles.continueBtn}>
                        <Link href={`/products/${products.id}`}>
                          More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProductsContent;
