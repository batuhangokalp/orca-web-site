import Link from "next/link";
import styles from "../../styles/News.module.css";
import Slider from "../ProductPageComponents/GlobalComponents/Slider";
import Image from "next/image";

const EachNew = ({ newsData }) => {
  return (
    <>
      {
        (newsData) ? (
          <div className={styles.eachNewContainer}>
            <div className={styles.allDiv}>
              <div className={styles.bannerDiv}>
                <Slider
                  firstImage={"/pictures/Commerce.png"}
                  secondImage={"/pictures/LoginScreen.png"}
                  thirdImage={"/pictures/CartOrder.png"}
                />
                <div className={styles.linkDiv}>
                  <Link href={"/products"}>Go to Products!</Link>
                </div>
              </div>
              <div className={styles.newsDiv}>
                <h1>{newsData.newsName}</h1>
                <div className={styles.newsImage}>
                  <Image
                    src={newsData.imgIdSrc}
                    alt={newsData.imgAlt}
                    width={newsData.imageIdWidth}
                    height={newsData.imageIdHeight}
                    quality={100}
                  />
                </div>
                <span>{newsData.newsIdExplain}</span>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <div className={styles.backBtn}>
                    <div className={styles.btnBack}>
                      <Link href={"/news"}>Turn back to <br /> News Page</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p></p>
        )

      }
    </>
  );
};

export default EachNew;
