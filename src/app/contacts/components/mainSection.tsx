import { comp, contact_main, globus, left, message, plus, right } from "@/assets";
import Title from "@/components/shared/Title";
import { useTranslations } from "@/hooks/useTranslations";
import { useTransition } from "react";

export default function MainSection() {
    const t = useTranslations()
  return (
    <div className="main-container my-30">
      <div className="mx-auto w-full max-w-[600px]">
        <Title
          title="Hamkorlik — bu muloqotdan boshlanadi"
          desc=" Aloqaga chiqing — yangi imkoniyatlar va professional aloqalar aynan shu yerdan boshlanadi."
        />
      </div>

      <div className="relative mt-30 flex h-[700px] w-full items-center justify-center">
        {/* back circles */}
        <div className="flex h-full max-h-[636px] w-full max-w-[636px] items-center justify-center rounded-[100%] bg-[#B0D0FF] opacity-30">
          <div className="flex h-full max-h-[532px] w-full max-w-[532px] items-center justify-center rounded-[100%] bg-[#8AB9FF]">
            <div className="h-full max-h-[408px] w-full max-w-[408px] rounded-[100%] bg-[#0066FF]"></div>
          </div>
        </div>

        {/* main image */}
        <div className="absolute right-0 left-0 z-10 flex h-[550px] w-full items-center justify-center">
          <div
            className="h-full w-[350px] rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${contact_main})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
        </div>

        {/* right part */}
        <div className="absolute top-20 right-30 z-20 flex w-[260px] flex-col items-start justify-baseline gap-5">

          <img src={right} alt="right icons" className="" />

          <div className="flex items-center gap-2 rounded-[20px] bg-white p-5 shadow-xl/30">
            <img src={message} alt="message icon" className="" />
            <p className="text-[16px] font-[700] text-[#1E242C]">
              Muloqot-harakat boshlanishi.
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-[20px] bg-white p-5 shadow-xl/30" >
            <img src={plus} alt="message icon" className="" />
            <p className="text-[16px] font-[700] text-[#1E242C]">
                Fikringiz biz uchun qadrli
            </p>
            <p className="text-[#414D60] text-[12px] font-[400]">Tashrifingizdan mamnunmiz — endi bog‘lanish vaqti.</p>
            <button className="text-[12px] bg-[#3385FF] rounded-[100px] text-white font-[500] px-8 py-2" >{t.buttons.contact}</button>
          </div>

        </div>

        {/* left part */}
        <div className="absolute bottom-20 left-30 z-20 flex w-[260px] flex-col items-end justify-baseline gap-5">

        <div className="flex flex-col items-center gap-2 rounded-[20px] bg-white p-5 shadow-xl/30" >
            <img src={comp} alt="message icon" className="" />
            <p className="text-[16px] font-[700] text-[#1E242C]">
                Aloqa — yuksalishning ilk qadamidir
            </p>
            <p className="text-[#414D60] text-[12px] font-[400]">Biznes takliflar va strategik hamkorlik uchun yozing.</p>
            <button className="text-[12px] bg-[#3385FF] rounded-[100px] text-white font-[500] px-8 py-2" >{t.buttons.contact}</button>
          </div>

          <div className="flex items-center w-full gap-2 rounded-[20px] bg-white p-5 shadow-xl/30">
            <img src={globus} alt="message icon" className="" />
            <p className="text-[16px] font-[700] text-[#1E242C]">
                100K +
            </p>
          </div>

          <img src={left} alt="right icons" className="" />

        </div>

      </div>

    </div>
  );
}
