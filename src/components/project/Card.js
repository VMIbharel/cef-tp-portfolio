export default function ProjectCard({
  image,
  title,
  description,
  comment,
  link,
}) {
  return (
    <div className="card h-100 project-card">
      <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-2">{title}</h5>
        <p className="card-text text-muted flex-grow-1 small">{description}</p>

        {link && (
          <a
            href={link}
            rel="noopener noreferrer nofollow"
            className="btn btn-primary"
          >
            Voir le site
          </a>
        )}
      </div>

      {comment && (
        <div className="card-footer bg-light text-center text-muted small">
          {comment}
        </div>
      )}
    </div>
  );
}
