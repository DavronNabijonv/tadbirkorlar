import Contact from "@/components/shared/contact";
import NewsShow from "./components/newsShow";
import { news_contact } from "@/assets";
import NewsEvents from "./components/ourEvents";

function NewsPage() {
  return (
    <>
      <NewsShow />
      <NewsEvents/>
      <Contact imgContact={news_contact} />
    </>
  );
}

export default NewsPage;
