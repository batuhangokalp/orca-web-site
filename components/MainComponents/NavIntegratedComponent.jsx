import styles from "../../styles/Home.module.css";
import { TiTickOutline } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

const NavIntegratedComponent = ({
  title,
  price,
  explain,
  firstProperty,
  secondProperty,
  thirdProperty,
  fourthProperty,
  fifthProperty,
}) => {
  return (
    <div className={styles.projects}>
      <div className={styles.img}>
        <Image
          src="/../public/pictures/OrcaOne.png"
          alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
          width={100}
          height={100}
        />
      </div>
      <h2>{title}</h2>
      <div className={styles.pricing}>
        <h1 className={styles.price}> {price} </h1>
        <h1 className={styles.time}> &nbsp; month</h1>
      </div>
      <span>{explain} </span> <br />
      <div className={styles.seperator}>
      </div>
      <br />
      <br />
      <br />
      
      <div className={styles.allProperties}>
        <div className={styles.properties}>
          <TiTickOutline color="#2C3D92" size={30} />
          <span>{firstProperty}</span>
        </div>
        <div className={styles.properties}>
          <div>
            <TiTickOutline color="#2C3D92" size={30} />
          </div>
          <span>{secondProperty}</span>
        </div>
        <div className={styles.properties}>
          <div>
            <TiTickOutline color="#2C3D92" size={30} />
          </div>
          <span>{thirdProperty}</span>
        </div>
        <div className={styles.properties}>
          <div>
            <TiTickOutline color="#2C3D92" size={30} />
          </div>
          <span>{fourthProperty}</span>
        </div>
        <div className={styles.properties}>
          <div>
            <TiTickOutline color="#2C3D92" size={30} />
          </div>
          <span>{fifthProperty}</span>
        </div>
      </div>
      <br />
      <div className={styles.getStartedBtn}>
        <Link href="#">
          <span>Get Started</span>
        </Link>
      </div>
    </div>
  );
};

export default NavIntegratedComponent;
