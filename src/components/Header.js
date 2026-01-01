import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <strong>JOHN DOE</strong>
          </Link>

          {/* Hamburger menu button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {siteConfig.navigation.map((item) => (
                <li key={item.href} className="nav-item">
                  <Link
                    to={item.href}
                    className={`nav-link ${
                      isActive(item.href)
                        ? "active fw-bold text-decoration-underline"
                        : ""
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
