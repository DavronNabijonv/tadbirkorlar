import type { IShowCase } from "@/types";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

export default function ShowCase({ title, desc, img , justify_value }: IShowCase) {
  const { lang } = useParams();
  return (
    <div
      className={`-bg-[position:0px_100px] h-[800px] bg-cover bg-no-repeat max-lg:bg-center flex items-start ${justify_value}`}
      style={{
        backgroundImage: `url(${img})`,
        mixBlendMode: "multiply",
      }}
    >
      <div className="inset-0 flex w-full max-w-[100%] flex-col items-center justify pt-[15%] max-[800px]:pt-[30%] min-[1000px]:max-w-[800px] min-lg:ml-[7%]">
        <p className="font-urbanist relative w-full max-w-[600px] text-center text-[47px] text-[#1E242C]">
        <motion.p
          initial={{ width: "100%" }}
          animate={{ width: "0" }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 z-10 h-full bg-[#8AB9FF]"
        ></motion.p>
          {title}
        </p>
        <p className="relative font-manrope w-full max-w-[600px] text-center text-[18px] text-[#1E242C]">
        <motion.p
          initial={{ width: "100%" }}
          animate={{ width: "0" }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 z-10 h-full bg-[#E4E4E4]"
        ></motion.p>
          {desc}
        </p>
        < motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="flex w-full items-center justify-center gap-3 pt-5 max-[750px]:flex-wrap">
          <HashLink to={`/${lang}#home_contact`}>
            <button className="bg-primary rounded-[16px] px-8 py-1 text-[24px] text-white max-sm:text-[18px] sm:px-18">
              Batafsil o'rganish
            </button>
          </HashLink>
          <Link to={`/${lang}/contacts`}>
            <button className="rounded-[16px] bg-white px-15 py-1 text-[24px] text-[#848D9B] max-sm:text-[18px] sm:px-25">
              Qo'shilish
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
