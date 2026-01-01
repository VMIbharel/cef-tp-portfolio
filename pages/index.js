import { useState } from "react";
import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import GitHubModal from "@/components/GitHubModal";

export default function Home() {
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);

  const openGitHubModal = () => setIsGitHubModalOpen(true);
  const closeGitHubModal = () => setIsGitHubModalOpen(false);

  return (
    <>
      <SEO
        title="Accueil"
        description="Bienvenue sur mon portfolio - John Doe, développeur web full stack"
      />

      {/* Hero section */}
      <Hero onOpenGitHubModal={openGitHubModal} />

      {/* About and Skills sections side by side */}
      <section className="about-skills-section">
        <div className="container">
          <div className="row">
            {/* About column */}
            <div className="col-lg-6 col-md-12">
              <About />
            </div>

            {/* Skills column */}
            <div className="col-lg-6 col-md-12">
              <Skills />
            </div>
          </div>
        </div>
      </section>

      <GitHubModal
        isOpen={isGitHubModalOpen}
        onClose={closeGitHubModal}
      />
    </>
  );
}