import SectionHeading from '../common/SectionHeading.jsx';
import ImageCard from '../common/ImageCard.jsx';
import Button from '../common/Button.jsx';
import { services } from '../../data/content.js';

export default function Services() {
  return (
    <section
      className="section container"
      id="services"
      aria-labelledby="services-h"
    >
      <SectionHeading id="services-h" lead="Our" accent="Services" />

      <div className="grid grid--4">
        {services.map((s) =>
          s.featured ? (
            <article key={s.title} className="icard icard--blue">
              <div className="icard__body icard__body--center">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Button>Read More</Button>
              </div>
            </article>
          ) : (
            <ImageCard
              key={s.title}
              title={s.title}
              image={s.image}
              tone={s.tone}
              className="icard--tall icard--center"
            />
          )
        )}
      </div>
    </section>
  );
}