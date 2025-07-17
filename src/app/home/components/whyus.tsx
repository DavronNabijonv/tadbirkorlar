import { hand, handshake, hoverback, message, world } from "@/assets";
import type { IWhyUs } from "@/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const whyData: IWhyUs[] = [
  {
    icon: hand,
    color: "bg-[#f5e5e8]",
    title: "Shaffoflik",
    desc: "Har bir loyiha — hujjatlar bilan asoslangan.",
  },
  {
    icon: world,
    color: "bg-[#BF7C161A]",
    title: "Hamkorlik",
    desc: "Ishtirokchilar tanlovi — adolatli va mezonlar asosida.",
  },
  {
    icon: message,
    color: "bg-[#14A89F1A]",
    title: "Tashabbus",
    desc: "Natijalar — raqamlar bilan, yolg‘onlarsiz.",
  },
  {
    icon: handshake,
    color: "bg-[#9314A81A]",
    title: "Ishonch",
    desc: "Hamkorlar — ishonchli va tekshirilgan tashkilotlar.",
  },
];

export default function Whyus() {
  const { ref, inView } = useInView({
    triggerOnce: true, // faqat bir marta trigger bo‘ladi
    threshold: 0.2, // 20% ko‘rinsa yetarli
  });
  return (
    <div className="main-container py-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="font-urbanist text-[30px] font-[500] text-[#1E242C] sm:text-[40px] lg:text-[56px]">
          Nega Aynan Biz?
        </p>
        <p className="max-w-[460px] text-center text-[16px] font-[400] text-[#414D60]">
          Biznes aloqalar — bu faqat raqamlar emas, bu ishonch, madaniyat va
          kelajak sari yo‘l.
        </p>
      </div>

      <div className="my-10 grid gap-4 max-[1200px]:grid-cols-3 max-[930px]:grid-cols-2 max-[620px]:grid-cols-1 max-lg:place-items-center min-[1200px]:grid-cols-4">
        {whyData.map((item, index) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            key={index}
            whileHover={{ scale: 1.03 }} // hoverda ozgina kattalashish
            className="group relative flex h-[400px] w-[280px] flex-col items-center overflow-hidden rounded-[8px] bg-[#E3E3F733] transition-all duration-300 hover:shadow-xl"
          >
            <div
              className={`rounded-full ${item.color} mt-6 flex h-[120px] w-[120px] items-center justify-center`}
            >
              <img src={item.icon} alt="icon" className="h-[45px] w-[45px]" />
            </div>

            {/* Wave background on hover */}
            <div className="absolute bottom-0 left-0 z-0 hidden h-[220px] w-full transition-all duration-300 group-hover:block">
              <img src={hoverback} />
            </div>

            {/* Text and arrow */}
            <div className="relative z-10 mt-18 flex flex-col items-center pb-6 text-white">
              <p className="text-[24px] font-[500] text-[#051114] group-hover:text-white">
                {item.title}
              </p>
              <p className="mt-2 px-2 text-center text-[16px] text-[#51565E] group-hover:text-white">
                {item.desc}
              </p>
              <div className="mt-10">
                <div className="flex h-[32px] w-[32px] flex-col items-center justify-center rounded-full border border-[#42B4EE] group-hover:border-white">
                  <span className="text-[18px] text-[#42B4EE] group-hover:text-white">
                    →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
