import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NavigatePage = () => {
  const navigate = useNavigate();
  const defaultLang = "uz";
  const { lang } = useParams();

  useEffect(() => {
    if (!lang) {
      navigate(`/${defaultLang}`);
    }
  }, [lang, navigate]);

  return null;
};

export default NavigatePage;
