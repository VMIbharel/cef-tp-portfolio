export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="card service-card h-100 border-0">
      <div className="card-body text-center">
        {/* Icon */}
        <div className="service-icon mb-3">
          <i className={`bi bi-${icon}`}></i>
        </div>

        {/* Title */}
        <h5 className="card-title fw-bold mb-3">{title}</h5>

        {/* Description */}
        <p className="card-text text-muted small">{description}</p>
      </div>
    </div>
  );
}
