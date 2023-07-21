import Header from "../../GlobalComponents/Header";
import styles from "../../../styles/Products.module.css";
import Link from "next/link";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import Image from "next/image";
import Meta from "@/components/GlobalComponents/Meta";
import { MetaDescriptionProducts, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const OrcaProductsHeader = ({
  headerTitle,
  headerExplain,
}) => {
  return (
    <>
      <Meta
        title={headerTitle}
        description={MetaDescriptionProducts}
        keywords={MetaKeywords}
      />
      <Header />
      <div className={styles.bannerHeading}>
        <div className={styles.introDiv}>
          <h1>{headerTitle}</h1>
          <div className={styles.rectangle}></div>
          {headerExplain &&
            headerExplain.split("<br/>").map((text, index) => {
              return <span key={index}>{text}</span>;
            })}

          <div className={styles.buyNowBtn}>
            <Link href="#">Buy Now</Link>
          </div>
          <div className={styles.appStores}>
            <div className={styles.appStore}>
              <AiFillApple size={25} color="#011926" />
              <span>
                Available <br />
                in App Store
              </span>
            </div>
            <div className={styles.appStore}>
              <AiFillAndroid size={25} color="#011926" />
              <span>
                Available <br />
                in Play Store
              </span>
            </div>
          </div>
        </div>
        <div className={styles.mobileIntroDiv}>
          <div className={styles.mobileApp}>
            <Image
              src={"/pictures/LoginScreen.png"}
              alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
              width={300}
              height={480}
              quality={100}
            />
          </div>
          {/* <div className={styles.largeCircle}></div> */}
          {/* <div className={styles.smallCircle}></div> */}
        </div>
      </div>
    </>
  );
};

export default OrcaProductsHeader;
