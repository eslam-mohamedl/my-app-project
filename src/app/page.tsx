import CardSection from "@/components/organisms/cardSection";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import Eslam from "@/components/organisms/Eslam";
import ServiceSection from "@/components/organisms/ServiceSection";
import TeamSection from "../components/organisms/TeamSection";
export default function page() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <Eslam />
      <ServiceSection />
      <TeamSection />

    </div>
  );
}
