import type { IShowCase } from "@/types";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function ShowCase({ title, desc, img }: IShowCase) {
  const { lang } = useParams();
  return (
    <div
      className="-bg-[position:0px_100px] h-[800px] bg-cover bg-no-repeat max-lg:bg-center"
      style={{
        backgroundImage: `url(${img})`,
        mixBlendMode: "multiply",
      }}
    >
      <div className="inset-0 flex w-full max-w-[100%] flex-col items-center justify-center pt-[15%] max-[800px]:pt-[30%] min-[1000px]:max-w-[800px] min-lg:ml-[7%]">
        <p className="font-urbanist w-full max-w-[600px] text-center text-[47px] text-[#1E242C]">
          {title}
        </p>
        <p className="font-manrope w-full max-w-[600px] text-center text-[18px] text-[#1E242C]">
          {desc}
        </p>
        <div className="flex w-full items-center justify-center gap-3 pt-5 max-[750px]:flex-wrap">
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
        </div>
      </div>
    </div>
  );
}
