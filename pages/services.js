import Image from "next/image";
import SEO from "@/components/SEO";
import ServiceCard from "@/components/service/Card";
import { services } from "@/data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Découvrez mes services : UX Design, Développement web, Référencement"
      />

      {/* Banner */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 4", overflow: "hidden" }}>
        <Image
          src="/images/banner.jpg"
          alt="Bannière Services"
          fill
          sizes="100vw"
          quality={100}
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Services Section */}
      <section className="services-section py-5">
        <div className="container">
          {/* Title and Description */}
          <div className="text-center mb-5">
            <h1 className="section-title mb-3">Mon offre de services</h1>
            <p className="text-muted">
              Voici les prestations sur lesquelles je peux intervenir
            </p>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-12 col-md-6 col-lg-4">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
