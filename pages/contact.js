import SEO from '@/components/SEO';
import ContactForm from '@/components/contact/Form';
import ContactInfo from '@/components/contact/Info';
import { siteConfig } from '@/data/siteConfig';

export default function Contact() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.1234567890!2d4.8!3d45.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c3d0d0d0d0d1%3A0x0!2s${encodeURIComponent(siteConfig.contact.addressForMap)}!5e0!3m2!1sfr!2sfr!4v1234567890`;

  return (
    <>
      <SEO
        title="Contact"
        description="Contactez-moi pour discuter de vos projets web. Je suis disponible pour des collaborations et des entretiens."
      />

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="section-title mb-3">Contact</h1>
            <p className="text-muted">
              Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration, merci de remplir le formulaire de contact.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="contact-form-info-section row g-4">
            {/* Column 1: Form */}
            <div className="col-12 col-lg-6">
              <div className="border-bottom border-3 border-primary pb-3 mb-4">
                <h5 className="mb-0">Formulaire de contact</h5>
              </div>
              <ContactForm />
            </div>

            {/* Column 2: Info + Map */}
            <div className="col-12 col-lg-6">
              <div className="border-bottom border-3 border-primary pb-3 mb-4">
                <h5 className="mb-0">Mes coordonnées</h5>
              </div>

              {/* Contact Info */}
              <div className="mb-5">
                <ContactInfo />
              </div>

              {/* Google Map */}
              <div className="ratio ratio-16x9 rounded overflow-hidden">
                <iframe
                  src={mapUrl}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
