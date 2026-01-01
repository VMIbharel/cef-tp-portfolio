import SEO from '../components/SEO';
import ProjectCard from '../components/project/Card';
import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Réalisations"
        description="Découvrez mes réalisations : UX Design, Développement web, Référencement"
      />

      {/* Banner */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 4", overflow: "hidden" }}>
        <img
          src="/images/banner.jpg"
          alt="Bannière Services"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Réalisations Section */}
      <section className="py-5">
        <div className="container">
          {/* Title and Description */}
          <div className="text-center mb-5">
            <h1 className="section-title mb-3">Mes réalisations</h1>
            <p className="text-muted">
              Voici quelques-unes de mes réalisations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-4">
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  comment={project.comment}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
