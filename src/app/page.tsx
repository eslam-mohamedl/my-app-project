import ContactSection from "@/components/organisms/ContactSection";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import BahaaSection from "@/components/organisms/BahaaSection";
import Testimonial from "@/components/organisms/Testimonial";
import Eslam from "@/components/organisms/Eslam";
import ServiceSection from "@/components/organisms/ServiceSection";
import TeamSection from "../components/organisms/TeamSection";
import StatisticsSection from "@/components/organisms/StatisticsSection";
import GhezwanSection from "@/components/organisms/GhezwanSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <BahaaSection />
      <ContactSection />
      <Testimonial />
      <Eslam />
      <ServiceSection />
      <TeamSection />
      <StatisticsSection />
      <GhezwanSection />
    </div>
  );
}
