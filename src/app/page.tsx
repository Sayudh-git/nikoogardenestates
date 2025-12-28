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
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import StickyEnquire from "@/components/StickyEnquire";
import AutoContactModal from "@/components/AutoContactModal";
import ContactModal from "@/components/ContactModal";
import UserTracking from "@/components/UserTracking";

export default function Home() {
  return (
    <div className="min-h-screen">
      <UserTracking />
      <Header />
      <Hero />
      <div className="h-[12px] bg-gray-100"></div>
      <IntroSection />
      <div className="h-[12px] bg-gray-100"></div>
      <LeadForm />
      <div className="h-[12px] bg-gray-100"></div>
      <MasterPlan />
      <div className="h-[12px] bg-gray-100"></div>
      <HomePlans />
      <div className="h-[12px] bg-gray-100"></div>
      <Landmarks />
      {/* <QuickInfoBar /> */}
      <div className="h-[12px] bg-gray-100"></div>
      <Amenities />
      <div className="h-[12px] bg-gray-100"></div>
      <Gallery />
      <div className="h-[12px] bg-gray-100"></div>
      <LocationSection />
      <div className="h-[12px] bg-gray-100"></div>
      <VideoSection />
      <div className="h-[12px] bg-gray-100"></div>
      <BottomCTA />
      <div className="h-[12px] bg-gray-100"></div>
      <AboutSection />
      <Footer />
      <StickyEnquire />
      <AutoContactModal />
      <ContactModal />
    </div>
  );
}
