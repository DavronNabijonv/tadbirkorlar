import {
  comp,
  contact_main,
  globus,
  left,
  message,
  plus,
  right,
} from "@/assets";
import Title from "@/components/shared/Title";
import { useTranslations } from "@/hooks/useTranslations";
// FadeInSection.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MainSection() {
  const t = useTranslations();
  // vashe
  // Circle uchun:
  const { ref: circle1, inView: inViewCircle } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // left uchun:
  const { ref: leftRef, inView: leftView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // right uchun:
  const { ref: rightRef, inView: rightView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // main image
  const { ref: mainImage, inView: mainImageView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="main-container my-30">
      <div className="mx-auto w-full max-w-[600px]">
        <Title
          title="Hamkorlik — bu muloqotdan boshlanadi"
          desc=" Aloqaga chiqing — yangi imkoniyatlar va professional aloqalar aynan shu yerdan boshlanadi."
        />
      </div>

      <div className="relative mt-30 flex h-[900px] w-full items-center justify-center min-[850px]:h-[700px]">
        {/* back circles */}
        <motion.div
          ref={circle1}
          initial={{ scale: 0 }}
          animate={inViewCircle ? { scale: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="hidden h-full max-h-[400px] w-full max-w-[400px] items-center justify-center rounded-[100%] bg-[#B0D0FF] opacity-30 sm:flex md:max-h-[636px] md:max-w-[636px]"
        >
          <div className="flex h-full max-h-[320px] w-full max-w-[320px] items-center justify-center rounded-[100%] bg-[#8AB9FF] md:max-h-[532px] md:max-w-[532px]">
            <div className="h-full max-h-[250px] w-full max-w-[250px] rounded-[100%] bg-[#0066FF] md:max-h-[408px] md:max-w-[408px]"></div>
          </div>
        </motion.div>

        {/* main image */}
        <motion.div
          ref={mainImage}
          initial={{ opacity: 0 }}
          animate={mainImageView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 , ease:'easeInOut'}}
          className="absolute right-0 left-0 z-10 flex h-[350px] w-full items-center justify-center md:h-[550px]"
        >
          <div
            className="h-full w-[300px] rounded-xl bg-cover bg-top bg-no-repeat object-cover md:w-[350px] md:bg-center"
            style={{
              backgroundImage: `url(${contact_main})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
        </motion.div>

        {/* right part */}
        <motion.div
          ref={rightRef}
          initial={{ x: 90, opacity: 0 }}
          animate={rightView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute -top-[50px] right-0 z-20 flex w-[260px] flex-col items-start justify-baseline gap-5 min-[850px]:top-20 min-[1100px]:right-30"
        >
          <img
            src={right}
            alt="right icons"
            className="hidden min-[850px]:flex"
          />

          <div className="flex items-center gap-2 rounded-[20px] bg-white p-5 shadow-xl/30">
            <img src={message} alt="message icon" className="" />
            <p className="text-[16px] font-[700] text-[#1E242C]">
              Muloqot-harakat boshlanishi.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-[20px] bg-white p-5 shadow-xl/30">
            <img src={plus} alt="message icon" className="" />
            <p className="text-[16px] font-[700] text-[#1E242C]">
              Fikringiz biz uchun qadrli
            </p>
            <p className="text-[12px] font-[400] text-[#414D60]">
              Tashrifingizdan mamnunmiz — endi bog‘lanish vaqti.
            </p>
            <button className="rounded-[100px] bg-[#3385FF] px-8 py-2 text-[12px] font-[500] text-white">
              {t.buttons.contact}
            </button>
          </div>
        </motion.div>

        {/* left part */}
        <motion.div
          ref={leftRef}
          initial={{ x: -90, opacity: 0 }}
          animate={leftView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-0 left-0 z-20 flex w-[260px] flex-col items-end justify-baseline gap-5 min-[850px]:bottom-20 min-[1100px]:left-30"
        >
          <div className="flex flex-col items-center gap-2 rounded-[20px] bg-white p-5 shadow-xl/30">
            <img src={comp} alt="message icon" className="" />
            <p className="text-[16px] font-[700] text-[#1E242C]">
              Aloqa — yuksalishning ilk qadamidir
            </p>
            <p className="text-[12px] font-[400] text-[#414D60]">
              Biznes takliflar va strategik hamkorlik uchun yozing.
            </p>
            <button className="rounded-[100px] bg-[#3385FF] px-8 py-2 text-[12px] font-[500] text-white">
              {t.buttons.contact}
            </button>
          </div>

          <div className="flex w-full items-center gap-2 rounded-[20px] bg-white p-5 shadow-xl/30">
            <img src={globus} alt="message icon" className="" />
            <p className="text-[16px] font-[700] text-[#1E242C]">100K +</p>
          </div>

          <img
            src={left}
            alt="right icons"
            className="hidden min-[850px]:flex"
          />
        </motion.div>
      </div>
    </div>
  );
}
