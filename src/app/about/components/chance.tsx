import {
  binafsha,
  chance1,
  chance2,
  chance3,
  jigarrang,
  kok,
  yashil,
} from "@/assets";
import type { IChanceIcon } from "@/types";
// FadeInSection.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const iconChance: IChanceIcon[] = [
  {
    icon: jigarrang,
    title: "Maqsadimiz",
    desc: "Sizni global sahnaga olib chiqish, yangi bozorlarga yo‘l ochish,va o‘zgarishga tayyor insonlar bilan birga rivojlanish.",
  },
  {
    icon: yashil,
    title: "Dastur haqida",
    desc: "Treninglar, vebinarlar, almashuv dasturlari va real hamkorliklar orqali siz o‘zingizni yangi darajaga olib chiqasiz.",
  },
  {
    icon: kok,
    title: "Bizga ishonadiganlar",
    desc: "Nafaqat siz, balki 15+ davlatdan 30+ hamkor, 500+ ishtirokchi. Bu — boshlanishi xolos.",
  },
  {
    icon: binafsha,
    title: "Tashabbus",
    desc: "Fikringiz qadrlanadi, g‘oyangiz qo‘llab-quvvatlanadi va albatta o’z biznisingizni takomillashtrasz.",
  },
];

export default function Chance() {
  const { ref, inView } = useInView({
    triggerOnce: true, // faqat bir marta trigger bo‘ladi
    threshold: 0.2, // 20% ko‘rinsa yetarli
  });
  return (
    <div className="main-container my-20">
      <div className="grid grid-cols-1 gap-10 max-[1200px]:place-items-center min-[1200px]:grid-cols-2">
        {/* Chap rasm qismi */}
        <div className="grid h-[300px] w-full max-w-[500px] grid-cols-2 grid-rows-2 gap-4 md:h-[600px]">
          <motion.div
            ref={ref}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * 1 }}
            className="h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${chance2})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * 2 }}
            className="row-span-2 h-full rounded-xl bg-cover bg-center bg-no-repeat lg:w-[350px]"
            style={{
              backgroundImage: `url(${chance1})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * 3 }}
            className="h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${chance3})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </motion.div>
        </div>

        {/* O‘ng matn qismi */}
        <div className="flex flex-col justify-start gap-6 md:ml-10">
          <h2 className="relative text-[30px] leading-tight font-[400] text-[#051114] md:text-[44px]">
            <motion.div
              ref={ref}
              initial={{ width: "100%" }}
              animate={inView ? { width: "0" } : {}}
              transition={{ duration: 1 }}
              className="absolute h-full w-full bg-[#8AB9FF]"
            ></motion.div>
            Chegarasiz imkoniyatlar sari yo‘l ochamiz.
          </h2>

          {/* Bullet list */}
          <div className="flex flex-col gap-3">
            {iconChance.map((item, index) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2, // har bir kartochka 0.2s kechikib chiqadi
                  ease: "easeOut",
                }}
                key={index}
                className="flex items-start justify-start gap-4"
              >
                <img
                  src={item.icon}
                  alt="icon image"
                  className="h-[15px] w-[20px]"
                />
                <div className="relative flex flex-col gap-3">
                  <p className="text-[24px] font-[500] text-[#051114]">
                    {item.title}
                  </p>
                  <p className="text-[16px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
