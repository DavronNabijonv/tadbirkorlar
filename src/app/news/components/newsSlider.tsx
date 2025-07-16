import { n1, n2, n3, n4, n5, n6 } from "@/assets";
import { useState } from "react";
import { FaCircle } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

const newsImages: string[] = [n1, n2, n3, n4, n5, n6];

export default function NewsSlider() {
  const [visibility, setVisibility] = useState<number | null>(null);

  return (
    <>
      <div className="my-5 mt-20 hidden w-full flex-col items-center justify-center gap-5 min-[500px]:flex">
        <div className="flex w-full items-center justify-around gap-5 bg-[#F9F9FD] py-15 max-xl:flex-wrap">
          {newsImages.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="News images"
              className={`h-[155px] w-[196px] rounded-[8px] object-cover transition-all duration-100 ${visibility === index ? "scale-130" : "scale-none"}`}
            />
          ))}
        </div>
        <div className="mt-15 flex gap-5">
          {newsImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setVisibility(index)}
              className={`text-[13px] ${visibility === index ? "text-[#0062AD]" : "tetx-[#231F20]"} `}
            >
              <FaCircle />
            </button>
          ))}
        </div>
      </div>

      <div className="hidden max-[500px]:flex mt-20 bg-[#F9F9FD] py-10 ">
        <Marquee
          direction="left"
          speed={80}
          pauseOnHover={false}
          gradient={false}
          loop={0} // 0 means infinite loop
        >
            {newsImages.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="News images"
              className={`h-[155px] w-[196px] rounded-[8px] object-cover transition-all mx-3 duration-100`}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
}
