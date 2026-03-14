import AutonomousRemediation from "@/components/Main_page_comps/autonomous_remediation";
import DemoPage from "@/components/Main_page_comps/DemoPage";
import FeaturesMain from "@/components/Main_page_comps/features_main";
import Footer from "@/components/Main_page_comps/footer";
import HowItWorks from "@/components/Main_page_comps/how_it_works";
import MainHeader from "@/components/Main_page_comps/MainHeader";
import PricingPage from "@/components/Main_page_comps/PricingPage";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <MainHeader />

      <main className="relative pt-32 pb-20 overflow-hidden">
        {/* Demo */}
        <DemoPage />

        {/* Features */}
        <FeaturesMain />

        {/* <HowItWorks /> */}
        <HowItWorks />

        {/* <AutonomousRemediation /> */}
        <AutonomousRemediation />

        {/* <PricingPage /> */}
        <PricingPage />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
