import SEO from "@/components/SEO";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <SEO 
        title="Accueil"
        description="Bienvenue sur mon portfolio"
      />
      <Hero />
    </>
  );
}