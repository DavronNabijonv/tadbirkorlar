import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-15">
      <p className="max-w-[950px] w-full text-center lg:text-[72px] sm:text-[45px] text-[30px] font-medium text-[#002B6B]">
        “Yangi Biznes Diplomatiyasiga Qo‘shiling”
      </p>
      <p className="font-urbanist text-center text-[18px] text-[#414D60] max-w-[600px] w-full ">
        Bu xalqaro biznes aloqalarini mustahkamlovchi, madaniy va iqtisodiy
        hamkorlikka yo‘l ochuvchi raqamli platforma.
      </p>
      <div className="flex gap-3 w-full max-[750px]:flex-wrap items-center justify-center pt-5 " >
        <Button className="max-w-[305px] w-full hover:bg-white hover:border-1 hover:border-[#848D9B] hover:text-[#848D9B]" >Batafsil o'rganish</Button>
        <Button className="max-w-[305px] w-full bg-white border-1 border-[#848D9B] text-[#848D9B] hover:border-0 hover:bg-[#0062AD] hover:text-white ">Qo'shilish</Button>
      </div>
    </div>
  );
}

export default HomePage;
