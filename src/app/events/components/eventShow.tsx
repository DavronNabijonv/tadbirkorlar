import { eventShow } from "@/assets";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import ShowCase from "@/components/shared/showCase";

// FadeInSection.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function EventShow() {
  const { ref, inView } = useInView({
    triggerOnce: true, // faqat bir marta trigger bo‘ladi
    threshold: 0.2, // 20% ko‘rinsa yetarli
  });

  return (
    <div className="relative mb-20 md:mb-50">
      <ShowCase
        img={eventShow}
        title="Biznes Diplomatiyasi Tadbirlar"
        desc="Biznes diplomatiyasi yo‘nalishidagi tadbirlar – bu yangi bosqichlarga yo‘l ochuvchi muloqot maydonlari."
      />

      <div className="main-container right-0 -bottom-[100px] left-0 mx-auto flex w-[100%] items-start justify-around gap-5 max-[800px]:pt-5 max-lg:flex-wrap min-[800px]:absolute">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 1 * 0.2,
            ease: "easeOut",
          }}
          className="group flex w-full max-w-[300px] flex-col items-start justify-start gap-3 rounded-[8px] bg-white p-5 shadow-xl/30 delay-100 duration-100 hover:bg-[#0062AD]"
        >
          <span className="text-[50px] text-[#0062AD] group-hover:text-white">
            <PiShoppingBagOpenBold />
          </span>
          <p className="text-[24px] font-[500] text-[#1E242C] group-hover:text-white">
            Diplomatik Aloqalar
          </p>
          <p className="text-[16px] font-[400] text-[#414D60] group-hover:text-white">
            Kelajak sari birgalikda: Biznes diplomatiyasi maydonida
          </p>
        </motion.div>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 2 * 0.2,
            ease: "easeOut",
          }} className="group flex w-full max-w-[300px] flex-col items-start justify-start gap-3 rounded-[8px] bg-white p-5 shadow-xl/30 delay-100 duration-100 hover:bg-[#0062AD]">
          <span className="text-[50px] text-[#0062AD] group-hover:text-white">
            <PiShoppingBagOpenBold />
          </span>
          <p className="text-[24px] font-[500] text-[#1E242C] group-hover:text-white">
            Diplomatik Aloqalar
          </p>
          <p className="text-[16px] font-[400] text-[#414D60] group-hover:text-white">
            Kelajak sari birgalikda: Biznes diplomatiyasi maydonida
          </p>
        </motion.div>
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 3 * 0.2,
            ease: "easeOut",
          }} className="group flex w-full max-w-[300px] flex-col items-start justify-start gap-3 rounded-[8px] bg-white p-5 shadow-xl/30 delay-100 duration-100 hover:bg-[#0062AD]">
          <span className="text-[50px] text-[#0062AD] group-hover:text-white">
            <PiShoppingBagOpenBold />
          </span>
          <p className="text-[24px] font-[500] text-[#1E242C] group-hover:text-white">
            Diplomatik Aloqalar
          </p>
          <p className="text-[16px] font-[400] text-[#414D60] group-hover:text-white">
            Kelajak sari birgalikda: Biznes diplomatiyasi maydonida
          </p>
        </motion.div>
      </div>
    </div>
  );
}
