import React from "react";
import styles from "../../styles/Contact.module.css";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import ContactForm from "./ContactForm";
import Image from "next/image";

const ContactContent = () => {
  return (
    <div className={styles.contactContent}>
      <div className={styles.imageDiv}>
        <Image
          src="pictures/ContactHeader.png"
          alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
          height={1}
          width={1}
          layout={"responsive"}
          quality={100}
        />
      </div>
      <div className={styles.smallHeading}>
        <div>
          <span>WANT TO CONTACT US?</span>
          <div className={styles.rectangle}></div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <h1>Schedule a call with us to find out if we can help you!</h1>
        <span className={styles.firstSpan}>
          Our team is here to help you. You can simply call or send us an E-mail
          to get more information.
        </span>
        <div className={styles.allInfo}>
          <div className={styles.info}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53370644.28049175!2d137.20394276221003!3d35.26905074193853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1689938824526!5m2!1str!2str"
              width="90%"
              height="250px"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={styles.contactInfo}>
              <div className={styles.communication}>
                <BsWhatsapp size={20} />
                <span> &ensp; +11 222 333 44 55</span>
              </div>
              <br /> <br />
              <div className={styles.communication}>
                <AiOutlineMail size={20} />
                <span>&ensp;info@test.com</span>
              </div>
              <br />
              <br />
              <div className={styles.communication}>
                <ImLocation size={20} />
                &ensp;
                <span>
                  Test.
                  <br />
                  2, Test Test Test
                  <br /> Test Test <br />
                  Test UNITED KINGDOM
                </span>
              </div>
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.form}>
            <span>To contact us please use the form below:</span>
            <div className={styles.sendForm}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
