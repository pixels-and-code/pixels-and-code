import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Experience } from "@/components/Experience";
import { Credibility } from "@/components/Credibility";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Experience />
      <Credibility />
      <Contact />
    </>
  );
}
