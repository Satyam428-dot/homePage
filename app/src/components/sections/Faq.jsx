import Accordion from '../common/Accordion.jsx';
import { faqs } from '../../data/content.js';

export default function Faq() {
  return (
    <section className="section container faq" aria-labelledby="faq-h">
      <h2 id="faq-h" className="faq__title">
        <span>F</span>requently
        <br />
        <span>A</span>sked
        <br />
        <span>Q</span>uestions
      </h2>

      <Accordion items={faqs} />
    </section>
  );
}