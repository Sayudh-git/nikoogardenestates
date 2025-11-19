import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import LeadForm from "@/components/LeadForm";
import MasterPlan from "@/components/MasterPlan";
import HomePlans from "@/components/HomePlans";
import QuickInfoBar from "@/components/QuickInfoBar";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import LocationSection from "@/components/LocationSection";
import Landmarks from "@/components/Landmarks";
import VideoSection from "@/components/VideoSection";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import StickyEnquire from "@/components/StickyEnquire";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <IntroSection />
      <LeadForm />
      <MasterPlan />
      <HomePlans />
      <QuickInfoBar />
      <Amenities />
      <Gallery />
      <LocationSection />
      <Landmarks />
      <VideoSection />
      <BottomCTA />
      <Footer />
      <StickyEnquire />
    </div>
  );
}
