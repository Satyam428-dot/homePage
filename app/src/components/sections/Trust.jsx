import { trust } from '../../data/content.js';

export default function Trust() {
  return (
    <section className="container trust" aria-label="Our track record">
      <div
        className="trust__img"
        role="img"
        aria-label="Corporate travel vehicle"
        style={{ backgroundImage: `url(${trust.image})` }}
      />

      <div className="trust__text">
        <h2>
          {trust.title[0]}
          <br />
          {trust.title[1]}
        </h2>

        <ul>
          {trust.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}