import CardSection from "@/components/organisms/cardSection";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
export default function page() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <CardSection />
    </div>
  );
}
