import { img1, img2, img3, img4 } from "@/assets";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import { Link, useParams } from "react-router-dom";

function HomeHero() {
  const { lang } = useParams();
  return (
    <div className="pt-50 flex flex-col items-center justify-center gap-4 py-15">
      <p className="w-full max-w-[950px] text-center text-[30px] font-medium text-[#002B6B] sm:text-[45px] lg:text-[72px]">
        “Yangi Biznes Diplomatiyasiga Qo‘shiling”
      </p>
      <p className="font-urbanist w-full max-w-[600px] text-center text-[18px] text-[#414D60]">
        Bu xalqaro biznes aloqalarini mustahkamlovchi, madaniy va iqtisodiy
        hamkorlikka yo‘l ochuvchi raqamli platforma.
      </p>

      <div className="flex w-full items-center justify-center gap-3 pt-5 max-[750px]:flex-wrap">
        <a href="#home_contact">
          <Button className="w-[305px] hover:border-1 hover:border-[#848D9B] hover:bg-white hover:text-[#848D9B]">
            Batafsil o'rganish
          </Button>
        </a>
        <Link to={`/${lang}/contacts`}>
          <Button className="w-[305px] border-1 border-[#848D9B] bg-white text-[#848D9B] hover:border-0 hover:bg-[#0062AD] hover:text-white">
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
