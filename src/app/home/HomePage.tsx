import Contact from "@/components/shared/contact";
import Faq from "./components/faq";
import HomeHero from "./components/homehero";
import Maindirect from "./components/maindirect";
import Whyus from "./components/whyus";
import { contactImage } from "@/assets";

function HomePage() {
  return (
    <>
      <HomeHero />

      <div id="whyus">
        <Whyus />
      </div>

      <div id="directs">
        <Maindirect />
      </div>

      <div id="faq">
        <Faq />
      </div>

      <div id="home_contact">
        <Contact imgContact={contactImage} />
      </div>
    </>
  );
}

export default HomePage;
