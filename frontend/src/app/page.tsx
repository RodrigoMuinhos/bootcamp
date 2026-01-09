'use client';

import { useEffect, useState } from "react";
import { FAQ } from "./components/FAQ";
import { Header } from "./components/Header";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { ForWho } from "./components/ForWho";
import { Hero } from "./components/Hero";
import { Instructor } from "./components/Instructor";
import { Problem } from "./components/Problem";
import { Project } from "./components/Project";
import { Roadmap } from "./components/Roadmap";
import { SignupModal } from "./components/SignupModal";
import { Solution } from "./components/Solution";
import { SpecialClass } from "./components/SpecialClass";
import { SpecialGuest } from "./components/SpecialGuest";
import { Journey } from "./components/Journey";
import { Newsletter } from "./components/Newsletter";
import { StickyFooter } from "./components/StickyFooter";

export default function Page() {
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

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/visit', { method: "POST", signal: controller.signal }).catch(() => {
      // falha de tracking não bloqueia a página
    });
    return () => controller.abort();
  }, []);

  const recordCtaClick = () => {
    fetch('/api/cta-click', { method: "POST" }).catch(() => {
      // falha de tracking não bloqueia a abertura do modal
    });
  };

  const handleOpenModal = () => {
    recordCtaClick();
    setIsModalOpen(true);
  };

  if (showRoadmap) {
    return <Roadmap onClose={() => setShowRoadmap(false)} />;
  }

  return (
    <div className="min-h-screen w-full bg-background pb-16 sm:pb-20 md:pb-24">
      <Header />
      <Hero onOpenModal={handleOpenModal} onShowRoadmap={() => setShowRoadmap(true)} />
      <Problem />
      <Solution />
      <Project />
      <SpecialClass />
      <ForWho />
      <Instructor />
      <SpecialGuest />
      <Journey />
      <Newsletter />
      <FAQ />
      <FinalCTA onOpenModal={handleOpenModal} />
      <Footer />

      {/* Sticky Footer - Always visible at bottom */}
      <StickyFooter onOpenModal={handleOpenModal} />

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
