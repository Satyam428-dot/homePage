import { useState } from 'react';
import Logo from '../common/Logo.jsx';
import Button from '../common/Button.jsx';
import { navLinks } from '../../data/content.js';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [sub, setSub] = useState(null);

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <Logo />
        <button type="button" className="nav__burger" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>
          <span /><span /><span />
        </button>
        <ul className={`nav__list ${menu ? 'is-open' : ''}`}>
          {navLinks.map((l) => (
            <li key={l.label} className="nav__li" onMouseLeave={() => setSub(null)}>
              {l.children ? (
                <>
                  <button type="button" className="nav__link" aria-expanded={sub === l.label} onClick={() => setSub(sub === l.label ? null : l.label)}>
                    {l.label} <span className="nav__caret" aria-hidden="true">⌄</span>
                  </button>
                  {sub === l.label && (
                    <ul className="nav__sub">
                      {l.children.map((c) => (
                        <li key={c}><a href={l.href}>{c}</a></li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a className={`nav__link ${l.label === 'Home' ? 'is-active' : ''}`} href={l.href}>{l.label}</a>
              )}
            </li>
          ))}
          <li className="nav__cta"><Button>Enquire Now</Button></li>
        </ul>
      </nav>
    </header>
  );
}