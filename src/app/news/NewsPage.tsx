import Contact from "@/components/shared/contact";
import NewsShow from "./components/newsShow";
import { news_contact } from "@/assets";
import NewsEvents from "./components/ourEvents";
import NewsSlider from "./components/newsSlider";

function NewsPage() {
  return (
    <>
      <NewsShow />
      <NewsSlider/>
      <NewsEvents/>
      <Contact imgContact={news_contact} />
    </>
  );
}

export default NewsPage;
