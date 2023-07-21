import { Footer } from "@/components/GlobalComponents/Footer";
import Header from "@/components/GlobalComponents/Header";
import Meta from "@/components/GlobalComponents/Meta";
import EachNew from "@/components/NewsPageComponents/EachNew";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import MyContext from "@/context/MyContext";
import { useContext } from "react";
import { MetaDescriptionNews, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const NewsDetail = ({ newsData }) => {

  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState();
  const { myState } = useContext(MyContext);

  useEffect(() => {
    const l_news = newsData.products.find((data) => {
      return data.id == Number(id);
    });
    setNews(l_news);
  }, []);

  useEffect(() => {
    (myState == "") && handleRedirect()
  }, [])

  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <>
      <Meta
        title={news && news.newsName}
        description={MetaDescriptionNews}
        keywords={MetaKeywords}
      />
      <Header />
      <div className={styles.container}>
        <EachNew newsData={news} />
        <Footer />
      </div>
    </>
  );
};

export default NewsDetail;

export const getServerSideProps = async (context) => {
  let newsData = [];
  const res = await fetch(`http://localhost:3008/api/news`);
  newsData = await res.json();
  return {
    props: {
      newsData,
    },
  };
};
