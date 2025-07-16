import { useTranslations } from "@/hooks/useTranslations";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
          <div className="grid grid-cols-1 items-start gap-8 py-[50px] max-md:items-start max-md:justify-center min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col gap-2 max-[380px]:items-center">
              <Link
                to={`/${lang}/`}
                className="text-[16px] font-bold text-white"
              >
                {t.footer.main.mainTitle}
              </Link>
              <HashLink
                to={`/${lang}#whyus`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.main.whyus}
              </HashLink>
              <HashLink
                to={`/${lang}#directs`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.main.directs}
              </HashLink>
              <HashLink
                to={`/${lang}#faq`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.main.faq}
              </HashLink>
              <HashLink
                to={`/${lang}#home_contact`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.main.contact}
              </HashLink>
            </div>
            <div className="flex flex-col gap-2 max-[380px]:items-center">
              <Link
                to={`/${lang}/about`}
                className="text-[16px] font-bold text-white"
              >
                {t.footer.about.aboutTitle}
              </Link>
              <HashLink
                to={`/${lang}/about#chance`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.about.aboutTitle}
              </HashLink>
              <HashLink
                to={`/${lang}/about#photo`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.about.photo}
              </HashLink>
              <HashLink
                to={`/${lang}/about#logos`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.about.partner}
              </HashLink>
              <HashLink
                to={`/${lang}/about#about_contact`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.about.contact}
              </HashLink>
            </div>
            <div className="flex flex-col gap-2 max-[380px]:items-center">
              <Link
                to={`/${lang}/events`}
                className="text-[16px] font-bold text-white"
              >
                {t.footer.events.eventTitle}
              </Link>
              <HashLink
                to={`/${lang}/events#event_d`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.events.eventsD}
              </HashLink>
              <HashLink
                to={`/${lang}/events#event_contact`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.events.contact}
              </HashLink>
            </div>
            <div className="flex flex-col gap-2 max-[380px]:items-center">
              <Link
                to={`/${lang}/news`}
                className="text-[16px] font-bold text-white"
              >
                {t.footer.news.newsTitle}
              </Link>
              <HashLink
                to={`/${lang}/news#last_new`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.news.lastNews}
              </HashLink>
              <HashLink
                to={`/${lang}/news#b_news`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.news.biznesNews}
              </HashLink>
              <HashLink
                to={`/${lang}/news#news_contact`}
                className="text-[14px] font-semibold text-white"
              >
                {t.footer.news.contact}
              </HashLink>
            </div>
            <div className="flex flex-col gap-2 max-[380px]:items-center">
              <Link
                to={`/${lang}/contact`}
                className="text-[16px] font-bold text-white"
              >
                {t.footer.conatact}
              </Link>
              <Link
                to={`/${lang}/contact`}
                className="flex items-center gap-2 text-[14px] font-semibold text-white"
              >
                <span className="text-[24px] text-[#8EC2F2]">
                  <FiPhone />
                </span>
                <p>(480) 555-0103</p>
              </Link>
              <Link
                to={`/${lang}/contact`}
                className="flex items-center gap-2 text-[14px] font-semibold text-white"
              >
                <span className="text-[24px] text-[#8EC2F2]">
                  <IoLocationOutline />
                </span>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </Link>
              <Link
                to={`/${lang}/contact`}
                className="flex items-center gap-2 text-[14px] font-semibold text-white"
              >
                <span className="text-[24px] text-[#8EC2F2]">
                  <FaTelegramPlane />
                </span>
                <p>debra.holt@example.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* privicy police footer */}
      <div className="m-auto flex w-full max-w-[1400px] items-center gap-2 p-2 max-[500px]:flex-wrap min-[400px]:p-5 min-[500px]:justify-between">
        <p className="text-[16px] font-[400] tracking-[1px] text-[#737373]">
          {t.footer.police}
        </p>
        <div className="flex items-center gap-2">
          <Link to={""} className="text-[25px] text-[#335BF5]">
            <FaFacebookSquare />
          </Link>
          <Link to={""} className="text-[25px] text-[#E51F5A]">
            <FaInstagram />
          </Link>
          <Link to={""} className="text-[25px] text-[#21A6DF]">
            <FaTwitter />
          </Link>
          <Link to={""} className="text-[25px] text-[#E42F08]">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
