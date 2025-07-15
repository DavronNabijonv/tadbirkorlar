import type { IShowCase } from "@/types";

export default function ShowCase({ title, desc, img }: IShowCase) {
  return (
    <div
      className="-bg-[position:0px_100px] h-[800px] bg-cover bg-no-repeat max-lg:bg-center"
      style={{
        backgroundImage: `url(${img})`,
        mixBlendMode: "multiply",
      }}
    >
      <div className="inset-0  min-[1000px]:max-w-[800px] max-w-[100%] w-full pt-[15%] max-[800px]:pt-[30%] min-lg:ml-[7%] flex flex-col justify-center items-center ">
        <p className="font-urbanist text-center max-w-[600px] w-full text-[47px] text-[#1E242C]">
          {title}
        </p>
        <p className="font-manrope text-center max-w-[600px] w-full text-[18px] text-[#1E242C]">
          {desc}
        </p>
        <div className="flex w-full items-center justify-center gap-3 pt-5 max-[750px]:flex-wrap">
          <button className=" text-[24px] max-sm:text-[18px] text-white bg-primary rounded-[16px] sm:px-18 px-8 py-1 ">
            Batafsil o'rganish
          </button>
          <button className="text-[#848D9B] max-sm:text-[18px] bg-white rounded-[16px] text-[24px] sm:px-25 px-15 py-1">
            Qo'shilish
          </button>
        </div>
      </div>
    </div>
  );
}
