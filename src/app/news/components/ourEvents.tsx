import { w1, w2, w3, w4, w5, w6, w7, w8, w9 } from "@/assets";
import Title from "@/components/shared/Title";
import Videos from "@/components/shared/videos";
import { useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";

const videoNews: {
  videos: string;
  title: string;
  desc: string;
  links: string;
}[] = [
  {
    videos: w1,
    title: "Bizning hamkorlarimiz",
    desc: "“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar,",
    links: "#",
  },
  {
    videos: w2,
    title: "Bizning hamkorlarimiz",
    desc: "“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar,",
    links: "#",
  },
  {
    videos: w3,
    title: "Bizning hamkorlarimiz",
    desc: "“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar,",
    links: "#",
  },
  {
    videos: w4,
    title: "Bizning hamkorlarimiz",
    desc: "“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar,",
    links: "#",
  },
  {
    videos: w5,
    title: "Bizning hamkorlarimiz",
    desc: "“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar,",
    links: "#",
  },
  {
    videos: w6,
    title: "Bizning hamkorlarimiz",
    desc: "“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar,",
    links: "#",
  },
  {
    videos: w7,
    title: "Bizning hamkorlarimiz",
    desc: "“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar,",
    links: "#",
  },
  {
    videos: w8,
    title: "Bizning hamkorlarimiz",
    desc: "“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar,",
    links: "#",
  },
  {
    videos: w9,
    title: "Bizning hamkorlarimiz",
    desc: "“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar,",
    links: "#",
  },
];

export default function NewsEvents() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [visibility, setVisibility] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          if (video.paused) {
            video.play();
            setVisibility(index);
          } else {
            video.pause();
            setVisibility(null);
          }
        } else {
          video.pause();
        }
      }
    });
  };

  return (
    <div className="my-20">
      <Title
        title="Bizning Tadbirlarimiz"
        desc="“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar, kompaniyalar va inkubatsion markazlar bilan hamkorlikda ishlaydi."
      />

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3">
        {videoNews.map((item, index) => (
          <div
            key={index}
            className="mt-15 flex h-[515px] w-[413px] flex-col items-center justify-between gap-3 rounded-[8px] p-3 shadow-[0_1px_35px_rgba(0,0,0,0.3)]"
          >
            <div className="rounded-8px relative h-[279px] w-[381px]">
              <Videos
                index={index}
                src={item.videos}
                setRef={(el) => (videoRefs.current[index] = el)}
                onPlay={() => handlePlay(index)}
              />
              <button
                onClick={() => handlePlay(index)}
                className={`absolute top-[40%] left-[40%] z-10 rounded-[100%] bg-[#0062AD] p-3 text-[30px] text-white ${visibility === index ? "opacity-10" : "opacity-100"}`}
              >
                <CiPlay1 />
              </button>
            </div>
            <p className="w-full text-center text-[24px] font-[500] text-[#1E242C]">
              {item.title}
            </p>
            <p className="w-full text-center text-[16px] font-[400] text-[#414D60]">
              {item.desc}
            </p>
            <button className="border- w-[100%] rounded-[16px] border-1 border-[#E1E0E0] bg-[#F2F2F2] py-2 text-center text-[16px] text-[#1E242C] hover:border-[#0062AD] hover:bg-[#0062AD] hover:text-white">
              Totam Rem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
