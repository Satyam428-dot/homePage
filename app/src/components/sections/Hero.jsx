import { useState } from 'react';
import Button from '../common/Button.jsx';
import { heroSlides } from '../../data/content.js';

export default function Hero() {
  const [i, setI] = useState(0);
  const s = heroSlides[i];

  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${s.image})` }}>
      <div className="hero__shade" />
      <div className="hero__inner container">
        <h1>
          <span className="hero__title">{s.title}</span>
          <span className="hero__sub">{s.sub}</span>
        </h1>
        <Button>{s.cta}</Button>
      </div>

      <ul className="hero__thumbs container" aria-label="Hero slides">
        {heroSlides.map((h, idx) => (
          <li key={h.title}>
            <button type="button" aria-label={`Show ${h.title}`} aria-current={idx === i ? 'true' : undefined}
              className={`thumb ${idx === i ? 'is-on' : ''}`} style={{ backgroundImage: `url(${h.image})` }}
              onClick={() => setI(idx)}/>
          </li>
        ))}
      </ul>

      <a href="#services" className="hero__scroll">
        <span>Scroll to Explore</span>
        <i aria-hidden="true">▲</i>
      </a>
    </section>
  );
}