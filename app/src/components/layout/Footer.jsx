import Logo from '../common/Logo.jsx';
import { footer } from '../../data/content.js';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__grid container">
        <div>
          <h4>Quick Links</h4>
          <ul className="footer__links">
            {footer.quickLinks.map((l) => <li key={l}><a href="#services">{l}</a></li>)}
          </ul>
        </div>
        <div className="footer__brand">
          <Logo large />
          <a href={`mailto:${footer.email}`}>✉ {footer.email}</a>
          <a href="tel:+919591775553">☎ {footer.phone}</a>
        </div>
        <div className="footer__offices">
          {footer.offices.map((o) => (
            <address key={o.name}>
              <strong>{o.name}</strong>
              <span>{o.address}</span>
            </address>
          ))}
        </div>
      </div>
      <ul className="stats container">
        {footer.stats.map((s) => (
          <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
        ))}
      </ul>
      <div className="footer__bottom container">
        <div className="footer__legal"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms and Conditions</a></div>
        <ul className="social">
          {footer.social.map((s) => <li key={s}><a href="#social" aria-label={s}>{s[0]}</a></li>)}
        </ul>
        <small>© 2001 Rental. All rights reserved</small>
      </div>
    </footer>
  );
}