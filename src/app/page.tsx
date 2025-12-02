import HeroSection from "./components/Hero";
import SplineShowcase from "./components/SplineShowcase";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificateSection from "./components/CertificateSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return <>
    <HeroSection/>
    <SplineShowcase/>
    <ExperienceSection/>
    <ProjectsSection/>
    <CertificateSection/>
    <ContactSection/>
  </>;
}