import type { ITitle } from "@/types";


export default function Title({title,desc}:ITitle) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
        <p className="font-urbanist text-[30px] font-[500] text-[#1E242C] text-center sm:text-[40px] lg:text-[56px]">
          {title}
        </p>
        <p className="max-w-[700px] text-center text-[16px] font-[400] text-[#414D60]">
          {desc}
        </p>
      </div>
  )
}
