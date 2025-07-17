import { comp, contact_main, globus, left, message, plus, right } from "@/assets";
import Title from "@/components/shared/Title";
import { useTranslations } from "@/hooks/useTranslations";

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

      <div className="relative mt-30 flex min-[850px]:h-[700px] h-[900px] w-full items-center justify-center">
        {/* back circles */}
        <div className=" hidden sm:flex h-full md:max-h-[636px] max-h-[400px] w-full md:max-w-[636px] max-w-[400px] items-center justify-center rounded-[100%] bg-[#B0D0FF] opacity-30">
          <div className="flex h-full md:max-h-[532px] max-h-[320px] w-full md:max-w-[532px] max-w-[320px] items-center justify-center rounded-[100%] bg-[#8AB9FF]">
            <div className="h-full md:max-h-[408px] max-h-[250px] w-full md:max-w-[408px] max-w-[250px] rounded-[100%] bg-[#0066FF]"></div>
          </div>
        </div>

        {/* main image */}
        <div className="absolute right-0 left-0 z-10 flex md:h-[550px] h-[350px] w-full items-center justify-center">
          <div
            className="h-full md:w-[350px] w-[300px] rounded-xl bg-cover md:bg-center bg-top bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${contact_main})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
        </div>

        {/* right part */}
        <div className="absolute min-[850px]:top-20 md:-top-[100px] -top-[50px] min-[1100px]:right-30 right-0 z-20 flex w-[260px] flex-col items-start justify-baseline gap-5">

          <img src={right} alt="right icons" className="min-[850px]:flex hidden"  />

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
        <div className="absolute min-[850px]:bottom-20 md:-bottom-[100px] bottom-0 min-[1100px]:left-30 left-0 z-20 flex w-[260px] flex-col items-end justify-baseline gap-5">

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

          <img src={left} alt="right icons" className="min-[850px]:flex hidden" />

        </div>

      </div>

    </div>
  );
}
