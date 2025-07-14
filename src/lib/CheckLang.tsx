/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const ChekLang = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang !== "uz" && lang !== "eng" && lang !== "ru") {
      navigate("/uz");
    }
  }, [lang]);

  return <Outlet />;
};
export default ChekLang;
