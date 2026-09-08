import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/academy', label: 'Academy' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          Bridge to <span>Better</span> Tech
        </Link>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={() => setOpen((o) => !o)}
        >
          Menu
        </button>
        <ul id="navMenu" className={open ? 'open' : ''}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                className={({ isActive }) => 'navlink' + (isActive ? ' active' : '')}
                to={link.to}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
