import {
  brat,
  doska,
  grafik,
  groupcol2,
  handfoto,
  kal,
  majlis,
  teacher,
  tish,
  woman,
  workwith,
} from "@/assets";
import Title from "@/components/shared/Title";
import Marquee from "react-fast-marquee";
// FadeInSection.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Photo() {
  const { ref, inView } = useInView({
    triggerOnce: true, // faqat bir marta trigger bo‘ladi
    threshold: 0,
  });
  return (
    <div className="mb-20">
      {/* title */}
      <div className="my-10">
        <Title
          title="Fotogalleriya"
          desc="Har bir tadbir – ishonchli muloqot, yangi imkoniyatlar va strategik hamkorlik sari qadamlardir."
        />
      </div>

      <div className="main-container hidden h-[1000px] min-[1100px]:block">
        {/* grid first photo part */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8, y: 80 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid h-1/2 w-full grid-cols-4 grid-rows-2 gap-4"
        >
          <div
            className="row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${kal})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="col-span-2 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${groupcol2})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="col-span-1 row-span-2 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${groupcol2})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${woman})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${majlis})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${doska})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
        </motion.div>

        {/* second photo part */}
        <div
          className="mt-10 grid h-1/2 w-full grid-cols-4 grid-rows-2 gap-4"
        >
          <div
            className="col-span-1 row-span-2 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${handfoto})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="col-span-1 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${tish})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="col-span-2 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${teacher})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="col-span-1 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${workwith})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="col-span-1 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${grafik})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="col-span-1 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${brat})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
        </div>
      </div>

      <div className="hidden max-h-[700px] min-h-[500px] w-full max-[1100px]:block">
        <Marquee
          direction="left"
          speed={80}
          pauseOnHover={false}
          gradient={false}
          loop={0} // 0 means infinite loop
        >
          <div className="mx-2 grid h-full max-h-[700px] min-h-[500px] w-[1000px] grid-cols-4 grid-rows-2 gap-4">
            <div
              className="row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${kal})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="col-span-2 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${groupcol2})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="col-span-1 row-span-2 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${groupcol2})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${woman})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${majlis})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${doska})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
          </div>

          <div className="grid max-h-[700px] min-h-[500px] w-[1000px] grid-cols-4 grid-rows-2 gap-4">
            <div
              className="col-span-1 row-span-2 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${handfoto})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="col-span-1 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${tish})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="col-span-2 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${teacher})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="col-span-1 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${workwith})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="col-span-1 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${grafik})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
            <div
              className="col-span-1 row-span-1 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(${brat})`,
                mixBlendMode: "multiply",
              }}
            >
              <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
