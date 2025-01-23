import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Copy from "./components/Copy";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Copy />
      <PricingSection />
    </main>
  );
}
