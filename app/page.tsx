import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhoFor from "@/components/WhoFor";
import Operations from "@/components/Operations";
import Implementation from "@/components/Implementation";
import FAQ from "@/components/FAQ";
import ContactPanel from "@/components/ContactPanel";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhoFor />
        <Operations />
        <Implementation />
        <FAQ />
        <Vision />
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
