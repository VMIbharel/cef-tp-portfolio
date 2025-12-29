import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero-section"
      aria-label="Section héroïque - Présentation principale"
    >
      <div className="hero-container">
        <Image
          src="/images/hero-bg.jpg"
          alt="Bannière de présentation - Portfolio John Doe"
          fill
          className="hero-image"
          priority
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Bonjour je suis John Doe</h1>
          <h2 className="hero-tagline">
            Développeur web full stack
          </h2>
          <Link href="#about" className="btn btn-danger btn-lg hero-cta">
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
