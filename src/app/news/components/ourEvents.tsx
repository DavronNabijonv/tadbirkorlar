import { w1, w2, w3, w4, w5, w6, w7, w8, w9 } from "@/assets";
import Title from "@/components/shared/Title";
import { useRef, useState } from "react";
import type { VideoNewsItem } from "@/types"; // optional umuman optio
import VideoCard from "../../../components/shared/VideoCard";


const videoNews: VideoNewsItem[] = [
  { videos: w1, title: "Hamkorlarimiz", desc: "“Business Diplomatia” platformasi...", links: "#" },
  { videos: w2, title: "Hamkorlarimiz", desc: "“Business Diplomatia” platformasi...", links: "#" },
  { videos: w3, title: "Hamkorlarimiz", desc: "“Business Diplomatia” platformasi...", links: "#" },
  { videos: w4, title: "Hamkorlarimiz", desc: "“Business Diplomatia” platformasi...", links: "#" },
  { videos: w5, title: "Hamkorlarimiz", desc: "“Business Diplomatia” platformasi...", links: "#" },
  { videos: w6, title: "Hamkorlarimiz", desc: "“Business Diplomatia” platformasi...", links: "#" },
  { videos: w7, title: "Hamkorlarimiz", desc: "“Business Diplomatia” platformasi...", links: "#" },
  { videos: w8, title: "Hamkorlarimiz", desc: "“Business Diplomatia” platformasi...", links: "#" },
  { videos: w9, title: "Hamkorlarimiz", desc: "“Business Diplomatia” platformasi...", links: "#" },
];

export default function NewsEvents() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="my-20">
      <Title
        title="Bizning Tadbirlarimiz"
        desc="“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan tashkilotlar bilan hamkorlikda ishlaydi."
      />

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 place-items-center min-[950px]:grid-cols-2 min-xl:grid-cols-3 gap-5">
        {videoNews.map((item, index) => (
          <VideoCard
            key={index}
            item={item}
            index={index}
            activeIndex={activeIndex}
            setActive={setActiveIndex}
            videoRefs={videoRefs}
          />
        ))}
      </div>
    </div>
  );
}
