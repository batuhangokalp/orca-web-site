import Meta from "../GlobalComponents/Meta";
import { useRouter } from "next/router";
import styles from "../../styles/News.module.css";
import Slider from "../ProductPageComponents/GlobalComponents/Slider";
import Link from "next/link";
import Image from "next/image";

const NewsContent = ({ newsData }) => {
  const router = useRouter();

  return (
    <>
      <Meta title="News" />
      <div className={styles.container}>
        <div className={styles.allNewsDiv}>
          <div className={styles.firstPage}>
            <div className={styles.bannerDiv}>
              <Slider
                firstImage={"/pictures/Commerce.png"}
                secondImage={"/pictures/LoginScreen.png"}
                thirdImage={"/pictures/CartOrder.png"}
              />
              <div className={styles.linkDiv}>
                <Link href={"/products"}>Go to Products!</Link>
              </div>
            </div>
          </div>
          <div className={styles.secondPage}>
            <div className={styles.firstDiv}>
              {newsData &&
                newsData.map((news) => {
                  return (
                    <div className={styles.firstNews} key={news.id}>
                      <div className={styles.newsImage}>
                        <Image
                          src={news.imgSrc}
                          alt={news.imgAlt}
                          width={news.imgWidth}
                          height={news.imgHeight}
                          quality={100}
                        />
                      </div>
                      <div className={styles.rightSide}>
                        <h1>{news.newsName}</h1>
                        <span>{news.newsExplain}</span>
                        <div
                          style={{
                            width: "100%",
                          }}
                        >
                          <div className={styles.btn}>
                            <div className={styles.continueBtn}>
                              <Link href={`/news/${news.id}`}>
                                More Detail
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsContent;
