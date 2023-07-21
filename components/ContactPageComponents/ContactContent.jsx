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
        src="/../public/pictures/ContactHeader.png"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d617.2549364928493!2d-0.45991343269227836!3d51.769246194324445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487646b3748feff1%3A0x9fb9186610af4694!2s2%20Lapwing%20Cl%2C%20Hemel%20Hempstead%20HP2%206DS%2C%20UK!5e0!3m2!1sen!2str!4v1680077017429!5m2!1sen!2str"
              width="90%"
              height="250px"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={styles.contactInfo}>
              <div className={styles.communication}>
                <BsWhatsapp size={20} />
                <span> &ensp; +44 782 532 63 43</span>
              </div>
              <br /> <br />
              <div className={styles.communication}>
                <AiOutlineMail size={20} />
                <span>&ensp;info@orcabs.com</span>
              </div>
              <br />
              <br />
              <div className={styles.communication}>
                <ImLocation size={20} />
                &ensp;
                <span>
                  Orca Business Solutions.
                  <br />
                  2, Lapwing Close HP2 6DS
                  <br /> Hemel Hempstead <br />
                  Hertfordshire UNITED KINGDOM
                </span>
              </div>
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.form}>
            <span>
              To contact us please use the form below:
            </span>
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
