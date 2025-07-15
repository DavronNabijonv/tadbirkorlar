import Contact from "@/components/shared/contact";
import NewsShow from "./components/newsShow";
import { news_contact } from "@/assets";

function NewsPage() {
  return (
    <>
      <NewsShow />
      <Contact imgContact={news_contact} />
    </>
  );
}

export default NewsPage;
