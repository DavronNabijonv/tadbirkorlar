import { useRef, useState, useEffect } from "react";
import { w1, w2, w3, w4, w5 } from "@/assets";
import Videos from "@/components/shared/videos";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Title from "@/components/shared/Title";
import './home.css';


const videoData = [
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
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<any>(null);

  // Navigation tugmalarini yangilash
  useEffect(() => {
    if (swiper && swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      
      if (i === index) {
        if (video.paused) {
          video.play();
          setPlayingIndex(index);
        } else {
          video.pause();
          setPlayingIndex(null);
        }
      } else {
        video.pause();
      }
    });
  };

  return (
    <div className="my-5 mb-20">
      <Title
        title="Asosiy Yo’nalishlar"
        desc="Platformamiz orqali siz nafaqat xalqaro aloqalarni o‘rganasiz, balki amaliyotga ham qo‘llasiz."
      />

      <div className="relative mt-20 ">
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiper}
          breakpoints={{
            800: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
          className=" home_swiper h-[500px] max-sm:h-[400px] flex items-center justify-center gap-10 "
        >
          {videoData.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center ">
              <div className="relative h-[480px] w-[350px] max-sm:w-[280px] max-sm:h-[400px] ">
                <div className="absolute h-full w-full overflow-hidden rounded-xl">
                  <Videos
                    index={index}
                    src={item.vd_src}
                    setRef={(el) => (videoRefs.current[index] = el)}
                    onPlay={() => handlePlay(index)}
                  />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-5 left-5 z-10 w-[250px] text-lg font-medium text-white">
                  {item.desc}
                </p>
                <button
                  onClick={() => handlePlay(index)}
                  className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#0062AD] p-3 text-[30px] text-white transition-opacity duration-300 ${
                    playingIndex === index ? 'opacity-0 hover:opacity-70' : 'opacity-100'
                  }`}
                >
                  <CiPlay1 />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 flex justify-center gap-4">
          <button
            ref={prevRef}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#002B6B] hover:bg-[#0062AD] hover:text-white"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-[#002B6B] hover:bg-[#0062AD] hover:text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}