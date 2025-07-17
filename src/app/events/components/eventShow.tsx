import { eventShow } from "@/assets";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import ShowCase from "@/components/shared/showCase";

export default function EventShow() {
  return (
    <div className="relative md:mb-50 mb-20 ">
      <ShowCase
        img={eventShow}
        title="Biznes Diplomatiyasi Tadbirlar"
        desc="Biznes diplomatiyasi yo‘nalishidagi tadbirlar – bu yangi bosqichlarga yo‘l ochuvchi muloqot maydonlari."
      />

      <div className="main-container max-[800px]:pt-5  min-[800px]:absolute -bottom-[100px] right-0 left-0 w-[100%] flex gap-5 max-lg:flex-wrap items-start justify-around mx-auto">

        <div className="group shadow-xl/30 flex flex-col gap-3 items-start max-w-[300px] w-full p-5 rounded-[8px] justify-start bg-white hover:bg-[#0062AD]">
          <span className="text-[50px] text-[#0062AD] group-hover:text-white">
            <PiShoppingBagOpenBold />
          </span>
          <p className="text-[#1E242C] text-[24px] font-[500] group-hover:text-white">Diplomatik Aloqalar</p>
          <p className="text-[#414D60] text-[16px] font-[400] group-hover:text-white">Kelajak sari birgalikda: Biznes diplomatiyasi maydonida</p>
        </div>
        <div className="group shadow-xl/30 flex flex-col gap-3 items-start max-w-[300px] w-full p-5 rounded-[8px] justify-start bg-white hover:bg-[#0062AD]">
          <span className="text-[50px] text-[#0062AD] group-hover:text-white">
            <PiShoppingBagOpenBold />
          </span>
          <p className="text-[#1E242C] text-[24px] font-[500] group-hover:text-white">Diplomatik Aloqalar</p>
          <p className="text-[#414D60] text-[16px] font-[400] group-hover:text-white">Kelajak sari birgalikda: Biznes diplomatiyasi maydonida</p>
        </div>
        <div className="group shadow-xl/30 flex flex-col gap-3 items-start max-w-[300px] w-full p-5 rounded-[8px] justify-start bg-white hover:bg-[#0062AD]">
          <span className="text-[50px] text-[#0062AD] group-hover:text-white">
            <PiShoppingBagOpenBold />
          </span>
          <p className="text-[#1E242C] text-[24px] font-[500] group-hover:text-white">Diplomatik Aloqalar</p>
          <p className="text-[#414D60] text-[16px] font-[400] group-hover:text-white">Kelajak sari birgalikda: Biznes diplomatiyasi maydonida</p>
        </div>

      </div>

    </div>
  );
}
