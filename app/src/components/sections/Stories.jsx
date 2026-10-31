import { useState } from 'react';
import SectionHeading from '../common/SectionHeading.jsx';
import { stories, storyLogos } from '../../data/content.js';

export default function Stories() {
  const [i, setI] = useState(0);
  const n = stories.length;
  const s = stories[i];
  return (
    <section className="section container stories" aria-labelledby="stories-h">
      <SectionHeading id="stories-h" lead="Success" accent="Stories" />
      <div className="stories__stage">
        <ul className="stories__logos" aria-hidden="true">
          {storyLogos.map((l, idx) => <li key={l} className={`sl sl--${idx + 1}`}>{l}</li>)}
        </ul>
        <figure className="stories__card" aria-live="polite">
          <strong className="stories__brand">{s.brand}</strong>
          <blockquote>{s.text}</blockquote>
          <figcaption><span>{s.name}</span><span>{s.role}</span></figcaption>
        </figure>
      </div>
      <div className="stories__nav">
        <button type="button" aria-label="Previous story" onClick={() => setI((i - 1 + n) % n)}>◀</button>
        <button type="button" aria-label="Next story" onClick={() => setI((i + 1) % n)}>▶</button>
      </div>
    </section>
  );
}