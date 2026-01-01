import { siteConfig } from '../../data/siteConfig';

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="mb-4">
        <h6 className="mb-3 text-dark">{siteConfig.siteName}</h6>

        {siteConfig.contact.map((contact) => {

          if (contact.label === "address") {
            return (
              <div key={contact.label} className="contact-info-item mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contact.value)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark text-decoration-none"
                >
                  {contact.value}
                </a>
              </div>
            );
          } else if (contact.label === "phone") {
            return (
              <div key={contact.label} className="contact-info-item mb-2">
                <i className="bi bi-telephone me-2"></i>
                  {contact.value}
              </div>
            );
          } else if (contact.label === "email") {
            return (
              <div key={contact.label} className="contact-info-item mb-3">
                <i className="bi bi-envelope me-2"></i>
                <a href={`mailto:${contact.value}`} className="text-dark text-decoration-none">
                  {contact.value}
                </a>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="d-flex gap-3">
        {siteConfig.socialLinks.map((social) => (
          <a
            key={social.icon}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            title={social.label}
            className="text-dark text-decoration-none"
            style={{ fontSize: "1.5rem", transition: "color 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#495057")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            <i className={`bi bi-${social.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
