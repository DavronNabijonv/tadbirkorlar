import { img1, img2, img3, img4 } from "@/assets";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function HomeHero() {
  const { lang } = useParams();
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-15 pt-50">
      <div className="relative w-full max-w-[950px] text-center text-[30px] font-medium text-[#002B6B] sm:text-[45px] lg:text-[72px]">
        <motion.p
          initial={{ width: "100%" }}
          animate={{ width: "0" }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 z-10 h-full bg-[#002B6B]"
        ></motion.p>
        “Yangi Biznes Diplomatiyasiga Qo‘shiling”
      </div>
      <div className="font-urbanist relative w-full max-w-[600px] text-center text-[18px] text-[#414D60]">
        <motion.p
          initial={{ width: "100%" }}
          animate={{ width: "0" }}
          transition={{ duration: 1 }}
          className="absolute z-10 h-full w-full rotate-0 bg-[#414D60]"
        ></motion.p>
        Bu xalqaro biznes aloqalarini mustahkamlovchi, madaniy va iqtisodiy
        hamkorlikka yo‘l ochuvchi raqamli platforma.
      </div>

      <div className="relative flex w-full items-center justify-center gap-3 pt-5 max-[750px]:flex-wrap">
        <motion.a
          initial={{ width:'0' }}
          animate={{ width:'305px' }}
          transition={{ duration: 1 }}
          href="#home_contact"
        >
          <Button className="h-[50px] w-[305px] hover:cursor-pointer rounded-[16px] text-[24px] hover:border-1 hover:border-[#848D9B] hover:bg-white hover:text-[#848D9B]">
            Batafsil o'rganish
          </Button>
        </motion.a>
        <Link to={`/${lang}/contacts`}>
          <Button className="h-[50px] hover:cursor-pointer w-[305px] rounded-[16px] border-1 border-[#848D9B] bg-white text-[24px] text-[#848D9B] hover:border-0 hover:bg-[#0062AD] hover:text-white">
            Qo'shilish
          </Button>
        </Link>
      </div>

      <div className="w-full py-10 pt-50">
        <Marquee
          direction="left"
          speed={80}
          pauseOnHover={false}
          gradient={false}
          loop={0} // 0 means infinite loop
        >
          <div className="mx-5 rounded-[20px] bg-[#F3F0D1]">
            <img
              src={img1}
              alt="photo"
              className="h-[300px] w-[300px] object-cover object-top"
            />
          </div>
          <div className="mx-5 rounded-[20px] bg-[#F3F0D1]">
            <img
              src={img2}
              alt="photo"
              className="h-[300px] w-[300px] object-cover object-top"
            />
          </div>
          <div className="mx-5 rounded-[20px] bg-[#E1E9FE]">
            <img
              src={img3}
              alt="photo"
              className="h-[300px] w-[300px] object-cover object-top"
            />
          </div>
          <div className="mx-5 rounded-[20px] bg-[#ECF5D6]">
            <img
              src={img4}
              alt="photo"
              className="h-[300px] w-[300px] object-cover object-top"
            />
          </div>
          <div className="mx-5 rounded-[20px] bg-[#F3F0D1]">
            <img
              src={img1}
              alt="photo"
              className="h-[300px] w-[300px] object-cover object-top"
            />
          </div>
          <div className="mx-5 rounded-[20px] bg-[#F3F0D1]">
            <img
              src={img2}
              alt="photo"
              className="h-[300px] w-[300px] object-cover object-top"
            />
          </div>
          <div className="mx-5 rounded-[20px] bg-[#E1E9FE]">
            <img
              src={img3}
              alt="photo"
              className="h-[300px] w-[300px] object-cover object-top"
            />
          </div>
          <div className="mx-5 rounded-[20px] bg-[#ECF5D6]">
            <img
              src={img4}
              alt="photo"
              className="h-[300px] w-[300px] object-cover object-top"
            />
          </div>

          {/* add more images */}
        </Marquee>
      </div>
    </div>
  );
}

export default HomeHero;
