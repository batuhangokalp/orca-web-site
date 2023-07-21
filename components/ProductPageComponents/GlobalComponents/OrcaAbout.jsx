import Image from "next/image";
import styles from "../../../styles/Products.module.css";

const OrcaAbout = ({aboutSmallHeader,aboutLargeHeader}) => {
  return (
    <div className={styles.aboutApp}>
      <div className={styles.allDiv}>
        <div className={styles.mobileDiv}>
          <Image
            src={"/pictures/CartOrder.png"}
            alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
            width={270}
            height={500}
            quality={100}
          />
        </div>
        <div className={styles.aboutDiv}>
          <div>
            <span>{aboutSmallHeader}</span>
            <div className={styles.rectangleAbout}></div>
          </div>
          <h1>{aboutLargeHeader}</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur. Amet donec tincidunt luctus
            elementum nunc. Facilisis tortor aliquam sit at mauris. Mauris
            egestas consequat sed egestas volutpat laoreet id viverra.Lorem
            ipsum dolor sit amet consectetur. Amet donec tincidunt luctus
            elementum nunc. <br />
            <br />
            Facilisis tortor aliquam sit at mauris. Mauris egestas consequat sed
            egestas volutpat laoreet id viverra.
          </span>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrcaAbout;
