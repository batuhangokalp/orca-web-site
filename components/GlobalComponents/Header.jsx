import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import AccordionData from "./AccordionData";
import { useContext, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MyContext from "@/context/MyContext";

const Header = () => {
  const { myState } = useContext(MyContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
  };
  return (
    <nav className={styles.totalHeader}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/../public/pictures/OrcaLogoLight.png"
            alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
            width={153}
            height={50}
            quality={100}
          />
        </Link>
      </div>
      <div className={styles.pages}>
        <ul className={styles.navigationLinks}>
          <Link href="/about">
            <li>ABOUT ORCA</li>
          </Link>
          <Link href="/products">
            <li >
              PRODUCTS
              {
                isOpen && (
                  <div className={styles.productsAccordion}>

                    <List className={styles.listAccordion} >
                      {
                        myState.map((item) => {
                          return (
                            <Link href={item.productLink} key={item.id}>
                              <ListItem disablePadding className={styles.acc}>
                                <ListItemButton >
                                  <ListItemText primary={item.productName} />
                                </ListItemButton>
                              </ListItem>
                              <Divider />
                            </Link>
                          )
                        })
                      }
                    </List>
                  </div>
                )
              }
            </li>
          </Link>
          <Link href="/services">
            <li>SERVICES</li>
          </Link>
          <Link href="/contact">
            <li>CONTACT US</li>
          </Link>
          <Link href="/news">
            <li>NEWS</li>
          </Link>
        </ul>
      </div>
      <div className={styles.memberInfo}>
        <Link href="/auth/login">
          <button className={styles.loginBtn}>Login</button>
        </Link>
        <Link href="/auth/register">
          <button className={styles.signUpBtn}>Sign Up</button>
        </Link>
      </div>
      <AccordionData />
    </nav>
  );
};

export default Header;

