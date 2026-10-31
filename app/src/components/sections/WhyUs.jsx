import SectionHeading from "../common/SectionHeading.jsx";
import ImageCard from "../common/ImageCard.jsx";
import { reasons } from "../../data/content.js";

export default function WhyUs() {
  return (
    <section className="section container" aria-labelledby="why-h">
      <SectionHeading id="why-h" lead="Why" accent="Rental Business"/>

      <div className="grid grid--3">
        {reasons.map((r) => (
          <ImageCard key={r.title}{...r}className="icard--wide"/>
        ))}
      </div>
    </section>
  );
}