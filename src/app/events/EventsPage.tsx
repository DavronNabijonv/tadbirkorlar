import Contact from "@/components/shared/contact";
import EventShow from "./components/eventShow";
import { handfoto } from "@/assets";
import OurEvents from "./components/ourEvents";

function EventsPage() {
  return (
    <>
      <EventShow />

      <div id="event_d">
        <OurEvents />
      </div>

      <div id="event_contact">
        <Contact imgContact={handfoto} />
      </div>
    </>
  );
}

export default EventsPage;
