import Header from "@/components/pages/header";
import AccessibilityBar from "@/components/pages/accessibillityBar";
import HeroSection from "@/components/pages/heroSection";
import TopAttraction from "@/components/pages/topAttraction";
import Testimonials from "@/components/pages/testimonials";
import ExploreRajasthan from "@/components/pages/exploreRajasthan";
import DistrictMapWeather from "@/components/pages/districtMapWeather";
import MagnificientCities from "@/components/pages/magnificentCities";
import PlanVisit from "@/components/pages/planVisit";
import AppSection from "@/components/pages/appSection";
import Footer from "@/components/pages/footer";

export default function Home() {
  return (
    <div className="bg-[#FDF3F3] text-foreground">
      {/* Accessibility Bar */}
      <AccessibilityBar />
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Top Attractions */}
      <TopAttraction />

      {/* Hear From Others - Testimonials */}
      <Testimonials />

      {/* Explore Rajasthan */}
      <ExploreRajasthan />

      {/* District Map with Weather */}
      <DistrictMapWeather />

      {/* Magnificent Cities */}
      {/* <MagnificientCities /> */}

      {/* Plan Your Perfect Visit */}
      <PlanVisit />

      {/* App Download Section */}
      <AppSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
