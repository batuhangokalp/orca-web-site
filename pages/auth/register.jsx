import Meta from "@/components/GlobalComponents/Meta";
import RegisterForm from "@/components/AuthComponents/RegisterForm";
import { useContext, useEffect } from "react";
import MyContext from "@/context/MyContext";
import { useRouter } from "next/router";
import { MetaDescriptionAuth, MetaKeywords } from "@/components/GlobalComponents/MetaValues";

const Register = () => {
  const router = useRouter();
  const { myState } = useContext(MyContext);
  useEffect(() => {
    myState == "" && handleRedirect();
  }, []);

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <>
      <Meta
        title="Sign Up"
        description={MetaDescriptionAuth}
        keywords={MetaKeywords}
      />
      <RegisterForm />
    </>
  );
};

export default Register;
