import Contact from "@/components/shared/contact";
import NewsShow from "./components/newsShow";
import { news_contact } from "@/assets";
import NewsEvents from "./components/ourEvents";
import NewsSlider from "./components/newsSlider";

function NewsPage() {
  return (
    <>
      <NewsShow />

      <div id="last_new">
        <NewsSlider />
      </div>

      <div id="b_news">
        <NewsEvents />
      </div>

      <div id="news_contact">
        <Contact imgContact={news_contact} />
      </div>
    </>
  );
}

export default NewsPage;
