import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import ProjectCaseStudies from '@/components/ProjectCaseStudies';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BuiltByMe from '@/components/BuiltByMe';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <TechStack />
        <Experience />
        <ProjectCaseStudies />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BuiltByMe />
    </div>
  );
};

export default Index;
