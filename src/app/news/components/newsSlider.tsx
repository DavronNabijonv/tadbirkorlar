import { n1, n2, n3, n4, n5, n6 } from "@/assets";
import { useState } from "react";
import { FaCircle } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const newsImages: string[] = [n1, n2, n3, n4, n5, n6];

export default function NewsSlider() {
  const [visibility, setVisibility] = useState<number | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className="my-5 mt-20 hidden w-full flex-col items-center justify-center gap-5 min-[500px]:flex">
        <div className="flex w-full items-center justify-around gap-5 bg-[#F9F9FD] py-15 max-xl:flex-wrap">
          {newsImages.map((item, index) => (
            <motion.div
              ref={ref}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            >
              <img
                key={index}
                src={item}
                alt="News images"
                className={`h-[155px] w-[196px] rounded-[8px] object-cover transition-all duration-100 ${visibility === index ? "scale-130" : "scale-none"}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-15 flex gap-5">
          {newsImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setVisibility(index)}
              className={`text-[13px] ${visibility === index ? "text-[#0062AD]" : "tetx-[#231F20]"} hover:cursor-pointer`}
            >
              <FaCircle />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-20 hidden bg-[#F9F9FD] py-10 max-[500px]:flex">
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
              className={`mx-3 h-[155px] w-[196px] rounded-[8px] object-cover transition-all duration-100`}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
}
