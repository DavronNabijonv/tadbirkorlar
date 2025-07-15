import Title from "@/components/shared/Title";
import { useRef } from "react";
import { w1, w2, w3, w4, w5 } from "@/assets";
import Videos from "@/components/shared/videos";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const videoData: { vd_src: string; desc: string }[] = [
  { vd_src: w1, desc: "Ta’lim va malaka oshirish" },
  { vd_src: w2, desc: "Muzokaralar bo‘yicha trening" },
  { vd_src: w3, desc: "Xalqaro almashinuvni yaxshilash" },
  { vd_src: w4, desc: "Ta’lim va malaka oshirish" },
  { vd_src: w5, desc: "Xalqaro almashinuvni yaxshilash" },
];

export default function Maindirect() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        } else {
          video.pause();
        }
      }
    });
  };

  return (
    <div>
      <div className="my-5 mb-20">
        <Title
          title="Asosiy Yo’nalishlar"
          desc="Platformamiz orqali siz nafaqat xalqaro aloqalarni o‘rganasiz, balki amaliyotga ham qo‘llasiz."
        />
      </div>

      <div className="">
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation = {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            };
          }}
          
          
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          centeredSlides={true}
          className="mySwiper h-[600px]"
        >
          {videoData.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div className="relative ml-20 flex h-[480px] w-[350px] flex-col items-center gap-4">
                <div className="absolute top-0 z-10 h-[480px] w-[350px]">
                  <Videos
                    index={index}
                    src={item.vd_src}
                    setRef={(el) => (videoRefs.current[index] = el)}
                    onPlay={() => handlePlay(index)}
                  />
                </div>
                <div className="absolute z-10 h-[480px] w-[350px] rounded-xl bg-gradient-to-t from-[#000] to-[#fff00]"></div>
                <p className="absolute bottom-5 left-5 z-30 w-[250px] text-lg font-medium text-white">
                  {item.desc}
                </p>
                <button
                  onClick={() => handlePlay(index)}
                  className="absolute top-50 z-40 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  ▶️
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-0 flex justify-center gap-4">
          <button
            ref={prevRef}
            className="h-[40px] w-[40px] flex items-center justify-center border-1  rounded-full bg-white text-[16px] text-[#002B6B] hover:bg-[#0062AD] hover:text-white"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="h-[40px] w-[40px] rounded-full flex items-center border-1 justify-center bg-white text-[16px] text-[#002B6B] hover:bg-[#0062AD] hover:text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
