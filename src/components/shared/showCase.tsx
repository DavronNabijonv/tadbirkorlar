import type { IShowCase } from "@/types";
import { Button } from "antd";

export default function ShowCase({ title, desc, img }: IShowCase) {
  return (
    <div>
      <div className="w-1/2">
        <p className="font-urbanist text-[47px] text-[#1E242C]">{title}</p>
        <p className="font-manrope text-[18px] text-[#1E242C]">{desc}</p>
        <div className="flex w-full items-center justify-center gap-3 pt-5 max-[750px]:flex-wrap">
          <Button className="w-full max-w-[305px] hover:border-1 hover:border-[#848D9B] hover:bg-white hover:text-[#848D9B]">
            Batafsil o'rganish
          </Button>
          <Button className="w-full max-w-[305px] border-1 border-[#848D9B] bg-white text-[#848D9B] hover:border-0 hover:bg-[#0062AD] hover:text-white">
            Qo'shilish
          </Button>
        </div>
      </div>
    </div>
  );
}
