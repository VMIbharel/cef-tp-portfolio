import SEO from "@/components/SEO";
import ContactInfo from "@/components/contact/Info";

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Découvrez mes services : UX Design, Développement web, Référencement"
        noindex={true}
        nofollow={true}
      />

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          {/* Title and Description */}
          <div className="text-center mb-5">
            <h1 className="section-title mb-3">Mentions Légales</h1>
          </div>

          {/* Legal Information Accordion */}
          <div className="row">
            <div className="col-12">
              <div className="accordion" id="legalAccordion">

                {/* Legal Information Item */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="legalHeader1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#legalCollapse1"
                      aria-expanded="true"
                      aria-controls="legalCollapse1"
                    >
                      Editeur du site
                    </button>
                  </h2>
                  <div
                    id="legalCollapse1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#legalAccordion"
                  >
                    <div className="accordion-body">
                      <ContactInfo />
                    </div>
                  </div>
                </div>

                
                {/* Hosting informations */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="legalHeader2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#legalCollapse2"
                      aria-expanded="true"
                      aria-controls="legalCollapse2"
                    >
                      Hébergeur du site
                    </button>
                  </h2>
                  <div
                    id="legalCollapse2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#legalAccordion"
                  >
                    <div className="accordion-body">
                      <h2>alwaysdata</h2>
                      <p>91 Rue du Faubourg Saint Honoré, 75008, Paris</p>
                      <i className="bi bi-globe me-2"></i>
                      <a href="https://www.alwaysdata.com">www.alwaysdata.com</a>
                    </div>
                  </div>
                </div>


                {/* Credits */}
                <div className="accordion-item">
                <h2 className="accordion-header" id="legalHeader3">
                    <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#legalCollapse3"
                    aria-expanded="true"
                    aria-controls="legalCollapse3"
                    >
                    Crédits
                    </button>
                </h2>
                <div
                    id="legalCollapse3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#legalAccordion"
                >
                    <div className="accordion-body">
                      <h2>Crédits</h2>
                      <p>
                        Ce site à été réalisé par John Doe, étudiant au 
                        <a href="https://www.centre-europeen-formation.fr/">Centre Européen de Formation</a>
                      </p>
                      <p><i>
                        Les images utilisées sur ce site sont libre de droits et ont obtenues sur le site&nbsp;
                        <a href="https://pixabay.com/">Pixabay</a>
                      </i></p>
                      <p><i>
                        La favicon de ce site à été fournie par&nbsp;
                        <a href="https://www.flaticon.com/free-icons/">John Doe Icons erstellt von Freepik - Flaticon</a>
                      </i></p>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}