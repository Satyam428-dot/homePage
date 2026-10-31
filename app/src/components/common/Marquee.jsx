// Infinite horizontal scroller. Items are duplicated for a seamless loop.

export default function Marquee({ items, className = '', label }) {
  return (
    <div className={`marquee ${className}`} role="region" aria-label={label}>
      <ul className="marquee__track">
        {[...items, ...items].map((item, i) => {
          const isDuplicate = i >= items.length;

          return (
            <li key={`${item.name}-${i}`} className="marquee__item" aria-hidden={isDuplicate}>
              {typeof item === 'string' ? (
                item
              ) : (
                <img src={item.logo} alt={isDuplicate ? '' : `${item.name} logo`}/>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}