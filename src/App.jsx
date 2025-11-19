import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Research from "./components/Research";
import Professionals from "./components/Professionals";
import Approach from "./components/Approach";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import TestimonialsSection from "./components/Testimonials";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Research />
      <Professionals />
      <Approach />
      <TestimonialsSection />
      <CTA/>
      <Footer/>
    </div>
  );
}
