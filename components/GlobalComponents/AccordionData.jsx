import { GiHamburgerMenu } from "react-icons/gi";
import Accordion from "./Accordion";
import styles from "../../styles/Home.module.css";

const accordionData = [
  {
    title: <GiHamburgerMenu size={40} color="fff" />,
  },
];
const AccordionData = () => {
  return (
    <div className={styles.sideBar}>
      {accordionData.map((item,index) => {
        return <Accordion key={index} item={item} />;
      })}
    </div>
  );
};

export default AccordionData;
