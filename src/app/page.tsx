import ContactSection from "@/components/organisms/ContactSection";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import Testimonial from "@/components/organisms/Testimonial";
import Eslam from "@/components/organisms/Eslam";
import ServiceSection from "@/components/organisms/ServiceSection";
import TeamSection from "../components/organisms/TeamSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <ContactSection />
      <Testimonial />
      <Eslam />
      <ServiceSection />
      <TeamSection />
    </div>
  );
}
