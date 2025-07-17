import { about_show } from "@/assets";
import ShowCase from "@/components/shared/showCase";

export default function ShowCaseAbout() {
  return (
    <div>
      <ShowCase
        img={about_show}
        justify_value="justify-start"
        title="Biz Haqimizda Bilishni Hohlaysizmi"
        desc=" Bu xalqaro biznes aloqalarini mustahkamlovchi, madaniy va iqtisodiy hamkorlikka yo‘l ochuvchi raqamli platforma."
      />
    </div>
  );
}
