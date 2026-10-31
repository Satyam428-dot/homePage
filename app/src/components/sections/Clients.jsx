import Marquee from '../common/Marquee.jsx';
import { clients } from '../../data/content.js';

export default function Clients() {
  return (
    <section className="strip" aria-label="Our clients">
      <Marquee label="Client logos" className="marquee--clients" items={clients} />
    </section>
  );
}