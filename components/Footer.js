import Link from "next/link";

export default function Footer() {
  const infos = [
    { label: "Adresse", value: "40 rue Laure Diebold 69009 Lyon Cedex" },
    { label: "Téléphone", value: "10 20 30 40 50" },
    { label: "Email", value: "john.doe@gmail.com" },
  ];
  
  const socialLinks = [
    { icon: "github", url: "https://github.com/john-doe", label: "GitHub" },
    { icon: "twitter", url: "https://twitter.com/john-doe", label: "Twitter" },
    { icon: "linkedin", url: "https://linkedin.com/in/john-doe", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Contact", href: "/contact" },
    { label: "Mentions Légales", href: "/mentions-legales" },
  ];

  const portfolioLinks = [
    { label: "Fresh Food", href: "/realisations/projet-1" },
    { label: "Restaurant Akira", href: "/realisations/projet-2" },
    { label: "Espace bien-être", href: "/realisations/projet-3" },
    { label: "SEO", href: "/realisations/projet-4" },
    { label: "Création d'une API", href: "/realisations/projet-5" },
    { label: "Maquette d'un site", href: "/realisations/projet-6" },
  ];


  return (
    <footer className="bg-light py-5 mt-5">
      <div className="container-fluid">
        <div className="row g-4">
          {/* Column 1: Site Info & Social Links */}
          <div className="col-md-4">
            <h5 className="mb-3">
              <strong>JOHN DOE</strong>
            </h5>
            <div className="text-muted">
              {infos.map((info) => {
                let content;
                if (info.label === "Adresse") {
                  content = (
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(info.value)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted text-decoration-none"
                    >
                      {info.value}
                    </a>
                  );
                } else if (info.label === "Email") {
                  content = (
                    <a href={`mailto:${info.value}`} className="text-muted text-decoration-none">
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
                  className="text-muted"
                  title={social.label}
                  style={{ fontSize: "1.5rem", transition: "color 0.3s ease" }}
                  onMouseEnter={(e) => (e.target.style.color = "white")}
                  onMouseLeave={(e) => (e.target.style.color = "")}
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
              {quickLinks.map((link) => (
                <li key={link.href} className="mb-2">
                  <Link
                    href={link.href}
                    className="text-muted text-decoration-none"
                    style={{ transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => {
                      e.target.style.fontWeight = "bold";
                      e.target.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.fontWeight = "normal";
                      e.target.style.color = "";
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
              {portfolioLinks.map((project) => (
                <li key={project.href} className="mb-2 text-muted">
                  {project.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
