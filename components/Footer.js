import Link from "next/link";
import { navItems } from "@/data/navItems";
import { projects } from "@/data/projects";
import { socialLinks } from "@/data/socialLinks";
import { infos } from "@/data/infos";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container-fluid text-white footer-content">
        <div className="row g-4">
          {/* Column 1: Site Info & Social Links */}
          <div className="col-md-4">
            <h5 className="mb-3">
              <strong>John Doe</strong>
            </h5>
            <div className="text-white">
              {infos.map((info) => {
                let content;
                if (info.label === "Adresse") {
                  content = (
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(info.value)}`}
                      target="_blank"
                      style={{ transition: "all 0.3s ease" }}
                      onMouseLeave={(e) => {
                        e.target.style.fontWeight = "normal";
                        e.target.style.color = "white";
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.fontWeight = "bold";
                      }}
                      rel="noopener noreferrer"
                      className="text-white text-decoration-none"
                    >
                      {info.value}
                    </a>
                  );
                } else if (info.label === "Email") {
                  content = (
                    <a href={`mailto:${info.value}`}
                    className="text-white text-decoration-none"
                    style={{ transition: "all 0.3s ease" }}
                    onMouseLeave={(e) => {
                      e.target.style.fontWeight = "normal";
                      e.target.style.color = "white";
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.fontWeight = "bold";
                    }}>
                      {info.value}
                    </a>
                  );
                } else {
                  content = info.value;
                }
                return (
                  <p key={info.label} className="mb-2">
                    {content}
                  </p>
                );
              })}
            </div>
            <div className="d-flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  title={social.label}
                  style={{ fontSize: "1.5rem", transition: "color 0.3s ease", color: "#495057" }}
                  onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                  onMouseLeave={(e) => (e.target.style.color = "#495057")}
                >
                  <i className={`bi bi-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4">
            <h5 className="mb-3">Liens Rapides</h5>
            <ul className="list-unstyled">
              {navItems.map((link) => (
                <li key={link.href} className="mb-2">
                  <Link
                    href={link.href}
                    className="text-white text-decoration-none"
                    style={{ transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => {
                      e.target.style.fontWeight = "bold";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.fontWeight = "normal";
                      e.target.style.color = "white";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Latest Projects */}
          <div className="col-md-4">
            <h5 className="mb-3">Dernières Réalisations</h5>
            <ul className="list-unstyled">
              {projects.map((project) => (
                <li key={project.link} className="mb-2 text-white">
                  {project.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
