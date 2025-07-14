import Faq from "./components/faq";
import HomeHero from "./components/homehero";
import Maindirect from "./components/maindirect";
import Whyus from "./components/whyus";


function HomePage() {
  return (
    <>
     <HomeHero/>
     <Whyus/>
     <Maindirect/>
     <Faq/>
    </>
  );
}

export default HomePage;
