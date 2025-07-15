import { binafsha, chance1, chance2, chance3, jigarrang, kok, yashil } from "@/assets";
import type { IChanceIcon } from "@/types";

const iconChance:IChanceIcon[] = [
    {
        icon:jigarrang,
        title:'Maqsadimiz',
        desc:'Sizni global sahnaga olib chiqish, yangi bozorlarga yo‘l ochish,va o‘zgarishga tayyor insonlar bilan birga rivojlanish.'
    },
    {
        icon:yashil,
        title:'Dastur haqida',
        desc:'Treninglar, vebinarlar, almashuv dasturlari va real hamkorliklar orqali siz o‘zingizni yangi darajaga olib chiqasiz.'
    },
    {
        icon:kok,
        title:'Bizga ishonadiganlar',
        desc:'Nafaqat siz, balki 15+ davlatdan 30+ hamkor, 500+ ishtirokchi. Bu — boshlanishi xolos.'
    },
    {
        icon:binafsha,
        title:'Tashabbus',
        desc:'Fikringiz qadrlanadi, g‘oyangiz qo‘llab-quvvatlanadi va albatta o’z biznisingizni takomillashtrasz.'
    },
]

export default function Chance() {
  return (
    <div className="main-container my-20">
      <div className="grid grid-cols-1 gap-10 min-[1200px]:grid-cols-2 max-[1200px]:place-items-center ">
        {/* Chap rasm qismi */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-[500px] w-full md:h-[600px] h-[300px] ">
          <div
            className="h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${chance2})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="row-span-2 h-full lg:w-[350px] rounded-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${chance1})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
          <div
            className="h-full w-full rounded-xl bg-cover bg-center bg-no-repeat object-cover"
            style={{
              backgroundImage: `url(${chance3})`,
              mixBlendMode: "multiply",
            }}
          >
            <div className="h-full w-full rounded-xl bg-gradient-to-t from-[#05073C] to-[#fff00] opacity-50"></div>
          </div>
        </div>

        {/* O‘ng matn qismi */}
        <div className="flex flex-col justify-start gap-6 md:ml-10">
          <h2 className="text-[30px] text-[#051114] leading-tight font-[400] md:text-[44px]">
            Chegarasiz imkoniyatlar sari yo‘l ochamiz.
          </h2>

          {/* Bullet list */}
          <ul className="flex flex-col gap-3">
            {iconChance.map((item,index)=>(
                <div key={index} className="flex items-start justify-start gap-4" >
                    <img src={item.icon} alt="icon image" className="w-[20px] h-[15px]" />
                    <div className="flex flex-col gap-3" >
                        <p className="text-[24px] text-[#051114] font-[500]">{item.title}</p>
                        <p className="text-[16px]" >{item.desc}</p>
                    </div>
                </div>
            ))}
          </ul>

          
        </div>
      </div>
    </div>
  );
}
