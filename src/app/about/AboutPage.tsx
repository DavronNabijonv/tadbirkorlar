import Contact from "@/components/shared/contact";
import ShowCaseAbout from "./components/showCaseAbout";
import { about_contact } from "@/assets";
import Chance from "./components/chance";
import Photo from "./components/photo";

function AboutPage() {
  return (
    <>
      <ShowCaseAbout />
      <Chance/>
      <Photo/>
      <div className="mt-10" >
        <Contact imgContact={about_contact} />
      </div>
    </>
  );
}

export default AboutPage;
