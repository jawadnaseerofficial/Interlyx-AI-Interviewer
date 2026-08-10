import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Workflow from "@/components/Workflow";
import Platform from "@/components/Platform";
import Console from "@/components/Console";
import Engine from "@/components/Engine";
import Signals from "@/components/Signals";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Workflow />
      <Platform />
      <Console />
      <Engine />
      <Signals />
      <Security />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
