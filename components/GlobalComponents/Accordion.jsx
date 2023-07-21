import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const item = props.item;

  const items = [
    { name: "ABOUT ORCA", link: "/about" },
    { name: "PRODUCTS", link: "/products" },
    { name: "SERVICES", link: "/services" },
    { name: "CONTACT US", link: "/contact" },
    { name: "NEWS", link: "/news", },
    // { name: "LOGIN", link: "/auth/login" },
    // { name: "SIGN UP", link: "/auth/register" },
  ];

  return (
    <div className={styles.accordion}>
      <button
        className={styles.mainItems}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{item.title}</div>
      </button>
      {isActive && (
        <Box
          sx={{
            width: "10rem", height: "0.1rem",marginLeft:"-6.75rem"
          }}
        >
          <nav>
            <List className={styles.hamburgerMenuLinks}>
              {
                items.map((item, index) => {
                  return (
                    <Link href={item.link} key={index}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                    </Link>
                  )
                })
              }
            </List>
          </nav>
        </Box>
      )}
    </div>
  );
};

export default Accordion;
