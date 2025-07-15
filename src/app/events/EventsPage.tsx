import Contact from "@/components/shared/contact";
import EventShow from "./components/eventShow";
import { handfoto } from "@/assets";

function EventsPage() {
  return <>
  <EventShow/>
  <Contact imgContact={handfoto} />
  </>;
}

export default EventsPage;
