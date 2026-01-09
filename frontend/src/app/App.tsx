import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Project } from './components/Project';
import { SpecialClass } from './components/SpecialClass';
import { ForWho } from './components/ForWho';
import { Instructor } from './components/Instructor';
import { SpecialGuest } from './components/SpecialGuest';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SignupModal } from './components/SignupModal';
import { Roadmap } from './components/Roadmap';
import { useEffect, useState } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);

  useEffect(() => {
    const syncRoadmapFromHash = () => {
      if (window.location.hash === '#roadmap') {
        setShowRoadmap(true);
      }
    };

    syncRoadmapFromHash();
    window.addEventListener('hashchange', syncRoadmapFromHash);
    return () => window.removeEventListener('hashchange', syncRoadmapFromHash);
  }, []);

  if (showRoadmap) {
    return <Roadmap onClose={() => setShowRoadmap(false)} />;
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <Hero 
        onOpenModal={() => setIsModalOpen(true)}
        onShowRoadmap={() => setShowRoadmap(true)}
      />
      <Problem />
      <Solution />
      <Project />
      <SpecialClass />
      <ForWho />
      <Instructor />
      <SpecialGuest />
      <FAQ />
      <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      
      <SignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}