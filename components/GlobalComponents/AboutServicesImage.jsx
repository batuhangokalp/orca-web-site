import Link from "next/link";
import styles from "../../styles/About.module.css";
import Image from "next/image";

const AboutServicesImage = () => {
    return (
        <div className={styles.aboutServiceImage}>
            <Image
                src="/pictures/x.jpg"
                alt="orca, product, orca one app, business, orca business solutions, solutions, commerce, e-commerce, navision, software, development, stock, stock management, company"
                fill
                objectFit="cover"
                quality={100}
            />
            <div className={styles.experience}>
                <span>12+</span> <br /> <span>Years Experience</span>
            </div>
            <div className={styles.learnMore}>
                <span>What We Do</span>
                <span>We Provide Solutions For Your Company’s Need.</span>
                <span>
                    <Link href="#">Learn More {"-->"}</Link>
                </span>
            </div>
        </div>
    )
}

export default AboutServicesImage