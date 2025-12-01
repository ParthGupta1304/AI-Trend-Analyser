import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TrustedSection from "./components/trusted";
import FeaturesSection from "./components/features";
import MetricsSection from "./components/metrics";
import TestimonialSection from "./components/testimonial";
import CtaSection from "./components/cta";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <>
      <div className="bg-(--brand-background)">
        <Navbar />
        <main>
          <Hero />
          <TrustedSection />
          <FeaturesSection />
          <MetricsSection />
          <TestimonialSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
