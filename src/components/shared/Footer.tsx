import { useTranslations } from "@/hooks/useTranslations";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

function Footer() {
  const t = useTranslations();
  const { lang } = useParams();

  return (
    <div className="bg-[#FAFAFA]">
      <div className="main-container">
        {/* head footer */}
        <div className="flex flex-col gap-1 py-7">
          <h1 className="text-[24px] font-bold text-[#252B42]">
            {t.footer.consulting}
          </h1>
          <p className="text-[14px] font-medium text-[#737373]">
            the quick fox jumps over the lazy dog
          </p>
        </div>
      </div>

      <div className="bg-[#0062AD]">
        <div className="main-container">
          {/* navlinks footer */}
          <div className=" grid lg:grid-cols-5  md:grid-cols-3 min-[380px]:grid-cols-2 grid-cols-1 max-md:items-start max-md:justify-center gap-8 items-start py-[50px] ">
            <div className="flex flex-col gap-2 max-[380px]:items-center " >
              <Link to={`/${lang}/`} className="text-white font-bold text-[16px] " >{t.footer.main.mainTitle}</Link>
              <Link to={`/${lang}/`} className="text-white font-semibold text-[14px] " >{t.footer.main.whyus}</Link>
              <Link to={`/${lang}/`} className="text-white font-semibold text-[14px] " >{t.footer.main.directs}</Link>
              <Link to={`/${lang}/`} className="text-white font-semibold text-[14px] " >{t.footer.main.faq}</Link>
              <Link to={`/${lang}/`} className="text-white font-semibold text-[14px] " >{t.footer.main.contact}</Link>
            </div>
            <div className="flex flex-col gap-2 max-[380px]:items-center" >
              <Link to={`/${lang}/about`} className="text-white font-bold text-[16px] " >{t.footer.about.aboutTitle}</Link>
              <Link to={`/${lang}/about`} className="text-white font-semibold text-[14px] " >{t.footer.about.aboutTitle}</Link>
              <Link to={`/${lang}/about`} className="text-white font-semibold text-[14px] " >{t.footer.about.photo}</Link>
              <Link to={`/${lang}/about`} className="text-white font-semibold text-[14px] " >{t.footer.about.partner}</Link>
              <Link to={`/${lang}/about`} className="text-white font-semibold text-[14px] " >{t.footer.about.contact}</Link>
            </div>
            <div className="flex flex-col gap-2 max-[380px]:items-center" >
              <Link to={`/${lang}/events`} className="text-white font-bold text-[16px] " >{t.footer.events.eventTitle}</Link>
              <Link to={`/${lang}/events`} className="text-white font-semibold text-[14px] " >{t.footer.events.eventsD}</Link>
              <Link to={`/${lang}/events`} className="text-white font-semibold text-[14px] " >{t.footer.events.contact}</Link>
            </div>
            <div className="flex flex-col gap-2 max-[380px]:items-center" >
              <Link to={`/${lang}/news`} className="text-white font-bold text-[16px] " >{t.footer.news.newsTitle}</Link>
              <Link to={`/${lang}/news`} className="text-white font-semibold text-[14px] " >{t.footer.news.lastNews}</Link>
              <Link to={`/${lang}/news`} className="text-white font-semibold text-[14px] " >{t.footer.news.biznesNews}</Link>
              <Link to={`/${lang}/news`} className="text-white font-semibold text-[14px] " >{t.footer.news.contact}</Link>
            </div>
            <div className="flex flex-col gap-2 max-[380px]:items-center" >
              <Link to={`/${lang}/contact`} className="text-white font-bold text-[16px] " >{t.footer.conatact}</Link>
              <Link to={`/${lang}/contact`} className="text-white font-semibold text-[14px] flex items-center gap-2 " >
                <span className="text-[24px] text-[#8EC2F2]" ><FiPhone /></span>
                <p >(480) 555-0103</p>
              </Link>
              <Link to={`/${lang}/contact`} className="text-white font-semibold text-[14px] flex items-center gap-2 " >
                <span className="text-[24px] text-[#8EC2F2]" ><IoLocationOutline /></span>
                <p >4517 Washington Ave. Manchester, Kentucky 39495</p>
              </Link>
              <Link to={`/${lang}/contact`} className="text-white font-semibold text-[14px] flex items-center gap-2 " >
                <span className="text-[24px] text-[#8EC2F2]" ><FaTelegramPlane /></span>
                <p>debra.holt@example.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* privicy police footer */}
      <div className="flex items-center gap-2 p-2 max-[500px]:flex-wrap min-[400px]:p-5 min-[500px]:justify-between max-w-[1400px] w-full m-auto">
        <p className="text-[16px] font-[400] tracking-[1px] text-[#737373]">
          {t.footer.police}
        </p>
        <div className="flex items-center gap-2">
          <Link to={""} className="text-[#335BF5] text-[25px] " >
            <FaFacebookSquare />
          </Link>
          <Link to={""} className="text-[#E51F5A] text-[25px] " >
            <FaInstagram />
          </Link>
          <Link to={""} className="text-[#21A6DF] text-[25px] " >
            <FaTwitter />
          </Link>
          <Link to={""} className="text-[#E42F08] text-[25px] " >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
