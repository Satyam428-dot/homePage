import { useState } from 'react';

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="acc">
      {items.map((item, i) => { const isOpen = open === i;

        return (
          <div className="acc__item" key={item.q}>
            <h3>
              <button type="button" className="acc__btn" aria-expanded={isOpen} aria-controls={`acc-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}>
                {item.q}
                <span className={`acc__chev ${isOpen ? 'is-open' : ''}`} aria-hidden="true"/>
              </button>
            </h3>

            <div id={`acc-${i}`} role="region" hidden={!isOpen} className="acc__panel">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}