import Contact from "@/components/shared/contact";
import EventShow from "./components/eventShow";
import { handfoto } from "@/assets";
import OurEvents from "./components/ourEvents";

function EventsPage() {
  return <>
  <EventShow/>
  <OurEvents/>
  <Contact imgContact={handfoto} />
  </>;
}

export default EventsPage;
