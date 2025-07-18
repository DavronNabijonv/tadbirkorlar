import { logos } from "@/assets";
import Title from "@/components/shared/Title";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PartnerLogo() {
  const { ref, inView } = useInView({
    triggerOnce: true, // faqat bir marta trigger bo‘ladi
    threshold: 0.2, // 20% ko‘rinsa yetarli
  });
  return (
    <div>
      <Title
        title="Bizning hamkorlarimiz"
        desc="“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar, kompaniyalar va inkubatsion markazlar bilan hamkorlikda ishlaydi."
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 , delay:0.5}}
      >
        <img src={logos} className="mx-auto mt-10 h-auto w-auto" />
      </motion.div>
    </div>
  );
}
