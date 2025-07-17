import { contact_show } from "@/assets";
import ShowCase from "@/components/shared/showCase";

export default function ContactShow() {
  return (
    <div className="mb-20" >
      <ShowCase
        img={contact_show}
        justify_value="justify-start"
        title="Diplomatik ko‘prik: Sizdan boshlanadi"
        desc="Biz siz bilan tanishishga, fikr almashishga va yangi yo‘nalishlar ochishga tayyormiz.А"
      />
    </div>
  );
}
