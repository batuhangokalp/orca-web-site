import { FaMobileAlt } from "react-icons/fa";
import styles from "../../../styles/Products.module.css";
import { RiMoneyPoundBoxLine } from "react-icons/ri";
import { GrIntegration } from "react-icons/gr";

const OrcaFacilities = ({ FacilityHeader, FacilityExplain }) => {
  return (
    <div className={styles.orcaFacilities}>
      <div className={styles.allFacilites}>
        <div className={styles.eachFacility}>
          <FaMobileAlt size={35} />
          <h3>MOBILE SALE</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed non
            semper risus, ac auctor massa.
          </span>
        </div>
        <div className={styles.eachFacility}>
          <GrIntegration size={35} /> <h3>{FacilityHeader}</h3>
          <span>{FacilityExplain}</span>
        </div>
        <div className={styles.eachFacility}>
          <RiMoneyPoundBoxLine size={35} />
          <h3>CUSTOMER BALANCE TRACKING</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed non
            semper risus, ac auctor massa.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrcaFacilities;
