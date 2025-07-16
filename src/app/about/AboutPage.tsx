import Contact from "@/components/shared/contact";
import ShowCaseAbout from "./components/showCaseAbout";
import { about_contact } from "@/assets";
import Chance from "./components/chance";
import Photo from "./components/photo";
import PartnerLogo from "./components/partnerLogo";

function AboutPage() {
  return (
    <>
      <ShowCaseAbout />

      <div id="chance">
        <Chance />
      </div>

      <div id="photo">
        <Photo />
      </div>

      <div id="logos">
        <PartnerLogo />
      </div>

      <div id="about_contact" className="mt-10">
        <Contact imgContact={about_contact} />
      </div>
    </>
  );
}

export default AboutPage;
