import { Footer } from "@/components/GlobalComponents/Footer";
import Meta from "@/components/GlobalComponents/Meta";
import styles from "../../styles/Home.module.css";
import NewsHeader from "@/components/NewsPageComponents/NewsHeader";
import NewsContent from "@/components/NewsPageComponents/NewsContent";
import { useContext, useEffect } from "react";
import MyContext from "@/context/MyContext";
import { useRouter } from "next/router";
import { MetaDescriptionNews, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const News = ({ newsData }) => {
  const router = useRouter();
  const { myState } = useContext(MyContext);
  useEffect(() => {
    (myState == "") && handleRedirect()
  }, [])
  const handleRedirect = () => {
    router.push('/');
  };

  return (
    <>
      <Meta
        title="News"
        description={MetaDescriptionNews}
        keywords={MetaKeywords}
      />
      <div className={styles.container}>
        <NewsHeader />
        <NewsContent newsData={newsData} />
        <Footer />
      </div>
    </>
  );
};

export default News;

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