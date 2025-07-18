import type { ITitle } from "@/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Title({ title, desc }: ITitle) {
  const { ref: titleRef, inView: titleView } = useInView({
    triggerOnce:true,
    threshold:0.2,
  });
  const { ref: descRef, inView: descView } = useInView({
    triggerOnce:true,
    threshold:0.2
  });

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <p className="font-urbanist relative text-center text-[30px] font-[500] text-[#1E242C] sm:text-[40px] lg:text-[56px]">
        <motion.p
          ref={titleRef}
          initial={{ width: "100%" }}
          animate={titleView ? { width: "0" } : {}}
          transition={{ duration: 0.6 }}
          className="absolute z-10 h-full bg-[#8AB9FF]"
        ></motion.p>
        {title}
      </p>
      <p className="relative max-w-[700px] text-center text-[16px] font-[400] text-[#414D60]">
        <motion.p
          ref={descRef}
          initial={{ width: "100%" }}
          animate={descView ? { width: "0" } : {}}
          transition={{ duration: 0.6 }}
          className="absolute z-10 h-full bg-[#bcbbc7]"
        ></motion.p>
        {desc}
      </p>
    </div>
  );
}
