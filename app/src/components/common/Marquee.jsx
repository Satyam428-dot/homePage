// Infinite horizontal scroller. Items are duplicated for a seamless loop.

export default function Marquee({ items, className = "", label }) {
  return (
    <div className={`marquee ${className}`} role="region" aria-label={label}>
      <ul className="marquee__track">
        {[...items, ...items].map((client, i) => (
          <li key={`${client.name}-${i}`} className="marquee__item" aria-hidden={i >= items.length}>
            <img src={client.logo} alt={i >= items.length ? "" : `${client.name} logo`}/>
          </li>
        ))}
      </ul>
    </div>
  );
}