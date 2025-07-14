import Contact from "@/components/shared/contact";
import Faq from "./components/faq";
import HomeHero from "./components/homehero";
import Maindirect from "./components/maindirect";
import Whyus from "./components/whyus";
import { contactImage } from "@/assets";


function HomePage() {
  return (
    <>
     <HomeHero/>
     <Whyus/>
     <Maindirect/>
     <Faq/>
     <Contact imgContact={contactImage} />
    </>
  );
}

export default HomePage;
