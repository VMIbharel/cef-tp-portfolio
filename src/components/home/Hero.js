export default function Hero({ onOpenGitHubModal }) {
  return (
    <section
      className="hero-section"
      aria-label="Section héroïque - Présentation principale"
    >
      <div className="hero-container">
        <img
          src="/images/hero-bg.jpg"
          alt="Bannière de présentation - Portfolio John Doe"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Bonjour je suis John Doe</h1>
          <h2 className="hero-tagline">
            Développeur web full stack
          </h2>
          <button
            onClick={onOpenGitHubModal}
            className="btn btn-danger btn-lg hero-cta"
            aria-label="En savoir plus - Ouvrir le profil GitHub"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
