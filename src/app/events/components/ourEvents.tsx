import { odamlar, oqstul, tepakal } from "@/assets";
import Title from "@/components/shared/Title";
import { Button } from "@/components/ui/button";

export default function OurEvents() {
  return (
    <div className="md:mb-30 mb-10 ">
      <Title
        title="Bizning Tadbirlarimiz"
        desc="“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar, kompaniyalar va inkubatsion markazlar bilan hamkorlikda ishlaydi."
      />

      <div className="main-container mt-10 flex flex-col gap-5">
        <div className="flex items-center justify-between gap-2 max-lg:flex-col">
          <div className="flex w-full max-w-[600px] items-center justify-center gap-3 bg-[#E4E4E4] py-30">
            <div className="flex max-w-[350px] flex-col items-center justify-center gap-3">
              <p className="text-center text-[24px] font-[500] text-[#1E242C]">
                Tadbirkorlar uchrashuvi: Ilhom, hamkorlik, o‘sish
              </p>
              <p className="text-center text-[16px] font-[400] text-[#414D60]">
                Tadbirkorlik — bu yolg‘iz yo‘l emas. Professional uchrashuvlar
                orqali bilim, tajriba va imkoniyatlar bir nuqtada jamlanadi. Har
                bir muloqot — yangi bosqich sari qadam.
              </p>
              <Button className="rounded-[16px] px-10 text-[16px] font-[500] text-white">
                Totam Rem
              </Button>
            </div>
          </div>

          <div className="h-[470px] w-full max-w-[600px]">
            <img src={tepakal} alt="" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 max-lg:flex-col">
            
          <div className="h-[490px] w-full max-w-[600px]">
            <img src={oqstul} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="flex w-full max-w-[600px] items-center justify-center gap-3 bg-[#E4E4E4] py-30">
            <div className="flex max-w-[350px] flex-col items-center justify-center gap-3">
              <p className="text-center text-[24px] font-[500] text-[#1E242C]">
                Global aloqalar: Biznes dunyosida yangi ufqlar
              </p>
              <p className="text-center text-[16px] font-[400] text-[#414D60]">
                Har bir tadbir — bu ilhom manbai. Biznes olamining ilg‘or
                vakillari, yangi yetakchilar va kuchli hamkorlar shu yerda
                birlashadi. Uchrashuvlar orqali nafaqat g‘oya almashiladi, balki
                kelajak strategiyalari ham belgilanadi.
              </p>
              <Button className="rounded-[16px] px-10 text-[16px] font-[500] text-white">
                Totam Rem
              </Button>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between gap-2 max-lg:flex-col">
          <div className="flex w-full max-w-[600px] items-center justify-center gap-3 bg-[#E4E4E4] py-30">
            <div className="flex max-w-[350px] flex-col items-center justify-center gap-3">
              <p className="text-center text-[24px] font-[500] text-[#1E242C]">
                Tadbirkorlar orasida — g‘oyalar, strategiyalar, muvaffaqiyat
              </p>
              <p className="text-center text-[16px] font-[400] text-[#414D60]">
                Bu yerda real biznes qilinadi, bu yerda kelajak yaratiladi.
                O‘zgarish istaganlar uchun – bu tadbirlar, yangi o‘rtoqliklar va
                yo‘l xaritalari boshlangan nuqta.
              </p>
              <Button className="rounded-[16px] px-10 text-[16px] font-[500] text-white">
                Totam Rem
              </Button>
            </div>
          </div>

          <div className="h-[470px] w-full max-w-[600px]">
            <img src={odamlar} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
