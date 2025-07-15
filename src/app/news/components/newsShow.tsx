import { news_show } from "@/assets";
import ShowCase from "@/components/shared/showCase";

export default function NewsShow() {
  return (
    <div>
      <ShowCase
        img={news_show}
        title="Biznes Diplomatik Yangiliklar"
        desc="Biznes diplomatiyasi yo‘nalishidagi tadbirlar – bu yangi bosqichlarga yo‘l ochuvchi muloqot maydonlari."
      />
    </div>
  );
}
