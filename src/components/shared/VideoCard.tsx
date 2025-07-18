import { motion } from "framer-motion";
import { CiPlay1 } from "react-icons/ci";
import { useInView } from "react-intersection-observer";
import Videos from "@/components/shared/videos";
import type { VideoNewsItem } from "@/types"; // optional

interface VideoCardProps {
  item: VideoNewsItem;
  index: number;
  activeIndex: number | null;
  setActive: (i: number | null) => void;
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
}

export default function VideoCard({
  item,
  index,
  activeIndex,
  setActive,
  videoRefs,
}: VideoCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handlePlay = () => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        if (video.paused) {
          video.play();
          setActive(index);
        } else {
          video.pause();
          setActive(null);
        }
      } else {
        video.pause();
      }
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="mt-15 flex h-[400px] w-[300px] flex-col items-center justify-between gap-1 rounded-[8px] p-3 shadow-[0_1px_35px_rgba(0,0,0,0.3)] sm:h-[515px] sm:w-[413px] sm:gap-3"
    >
      <div className="relative h-[170px] w-[280px] sm:h-[279px] sm:w-[381px] rounded-[8px] overflow-hidden">
        <Videos
          index={index}
          src={item.videos}
          setRef={(el) => (videoRefs.current[index] = el)}
          onPlay={handlePlay}
        />
        <button
          onClick={handlePlay}
          className={`absolute top-[40%] left-[40%] z-10 rounded-full bg-[#0062AD] p-3 text-[30px] text-white transition-opacity ${
            activeIndex === index ? "opacity-10" : "opacity-100"
          }`}
        >
          <CiPlay1 />
        </button>
      </div>

      <p className="w-full text-center text-[24px] font-medium text-[#1E242C]">
        {item.title}
      </p>
      <p className="w-full text-center text-[16px] font-normal text-[#414D60]">
        {item.desc}
      </p>
      <button className="w-full rounded-[16px] border border-[#E1E0E0] bg-[#F2F2F2] py-2 text-[16px] text-[#1E242C] transition hover:border-[#0062AD] hover:bg-[#0062AD] hover:text-white">
        Totam Rem
      </button>
    </motion.div>
  );
}
