import LoginForm from "@/components/AuthComponents/LoginForm";
import Meta from "@/components/GlobalComponents/Meta";
import { useContext, useEffect } from "react";
import MyContext from "@/context/MyContext";
import { useRouter } from "next/router";
import { MetaDescriptionAuth, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const Login = () => {

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
        title="Login"
        description={MetaDescriptionAuth}
        keywords={MetaKeywords}
      />
      <LoginForm />
    </>
  );
};

export default Login;
