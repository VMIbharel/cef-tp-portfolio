import Link from "next/link";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

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
              {siteConfig.contact.map((contact) => {
                let content;
                if (contact.label === "address") {
                  content = (
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(contact.value)}`}
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
                      {contact.value}
                    </a>
                  );
                } else if (contact.label === "email") {
                  content = (
                    <a href={`mailto:${contact.value}`}
                    className="text-white text-decoration-none"
                    style={{ transition: "all 0.3s ease" }}
                    onMouseLeave={(e) => {
                      e.target.style.fontWeight = "normal";
                      e.target.style.color = "white";
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.fontWeight = "bold";
                    }}>
                      {contact.value}
                    </a>
                  );
                } else {
                  content = contact.value;
                }
                return (
                  <p key={contact.label} className="mb-2">
                    {content}
                  </p>
                );
              })}
            </div>
            <div className="d-flex gap-3 mt-4">
              {siteConfig.socialLinks.map((social) => (
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
              {siteConfig.navigation.map((link) => (
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
                  <a href={project.link}
                  rel="noopener noreferrer nofollow"
                  className="text-white text-decoration-none">
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
