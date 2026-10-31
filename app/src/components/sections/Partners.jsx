import Marquee from '../common/Marquee.jsx';
import { partners } from '../../data/content.js';

export default function Partners() {
  return (
    <section className="strip strip--partners" aria-labelledby="partners-h">
      <h2 id="partners-h" className="strip__title">Discover the world with our 400+ partner brands</h2>
      <Marquee label="Hotel partner brands" className="marquee--partners" items={partners} />
    </section>
  );
}