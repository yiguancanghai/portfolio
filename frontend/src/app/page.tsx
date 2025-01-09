import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import SkillsSection from '@/components/home/SkillsSection';
import ProjectShowcase from '@/components/projects/ProjectShowcase';
import ContactSection from '@/components/home/ContactSection';
import ScrollToTop from '@/components/common/ScrollToTop';
import SectionWrapper from '@/components/common/SectionWrapper';

export default function Home() {
  return (
    <main>
      <SectionWrapper id="hero" className="min-h-screen">
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper id="about" className="bg-white dark:bg-gray-900">
        <AboutSection />
      </SectionWrapper>

      <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-800">
        <SkillsSection />
      </SectionWrapper>

      <SectionWrapper id="projects" className="bg-white dark:bg-gray-900">
        <ProjectShowcase />
      </SectionWrapper>

      <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-800">
        <ContactSection />
      </SectionWrapper>

      <ScrollToTop />
    </main>
  );
}
