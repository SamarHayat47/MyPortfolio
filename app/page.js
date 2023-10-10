import CtaSection from "./components/CtaSection";
import Main from "./components/Main";
import Skills from "./components/Skills";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <section className="container mx-auto">
      <Main />
      <Skills />
      <TestimonialsSection />
    </section>
  );
}
