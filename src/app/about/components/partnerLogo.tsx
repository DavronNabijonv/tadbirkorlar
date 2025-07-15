import { logos } from "@/assets";
import Title from "@/components/shared/Title";

export default function PartnerLogo() {
  return (
    <div>
      <Title
        title="Bizning hamkorlarimiz"
        desc="“Business Diplomatia” platformasi dunyo bo‘ylab faoliyat yuritayotgan ishonchli tashkilotlar, universitetlar, kompaniyalar va inkubatsion markazlar bilan hamkorlikda ishlaydi."
      />

        <img src={logos} className="mx-auto mt-10 w-auto h-auto" />

    </div>
  );
}
