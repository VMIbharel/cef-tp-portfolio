export default function About() {
  return (
    <div>
      {/* Title */}
      <h2 className="section-title mb-4">À propos</h2>

      <div className="row align-items-center g-4">
        {/* Image */}
        <img
          src="/images/john-doe-about.jpg"
          alt="John Doe - Développeur web"
          className="img-fluid rounded"
          style={{ maxWidth: '400px', height: 'auto' }}
        />

        {/* Text */}
        <div className="about-content">
          <p className="mb-4">
            Je suis un développeur web full stack passionné par la création
            de solutions numériques innovantes et de qualité. Avec plusieurs
            années d&apos;expérience dans le secteur, je combine rigueur technique
            et créativité pour concrétiser vos projets web les plus ambitieux.
          </p>
          <p className="mb-4">
            Mon expertise s&apos;étend sur l&apos;ensemble de la chaîne de développement :
            du design responsive aux architectures backend robustes, en passant
            par l&apos;optimisation des performances et l&apos;accessibilité web.
          </p>
        </div>
      </div>
    </div>
  );
}
