import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhoFor from "@/components/WhoFor";
import Operations from "@/components/Operations";
import FAQ from "@/components/FAQ";
import ContactPanel from "@/components/ContactPanel";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";
import InsuranceAdvantage from "@/components/InsuranceAdvantage";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Operations />
        <InsuranceAdvantage />
        <WhoFor />
        <FAQ />
        <Vision />
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
