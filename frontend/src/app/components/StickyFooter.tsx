'use client';

import { Clock, Users } from 'lucide-react';

interface StickyFooterProps {
  onOpenModal: () => void;
}

export function StickyFooter({ onOpenModal }: StickyFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary/95 to-accent shadow-2xl border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4 gap-4">
          {/* Info Section - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full backdrop-blur-sm">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/80 font-medium">Inscrições abertas</p>
                <p className="text-sm text-white font-semibold">Vagas limitadas por turma</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full backdrop-blur-sm">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-white/80 font-medium">37 pessoas</p>
                <p className="text-sm text-white font-semibold">Inscritas esta semana</p>
              </div>
            </div>
          </div>

          {/* Mobile Info - Visible only on mobile */}
          <div className="flex md:hidden items-center gap-2 flex-1 min-w-0">
            <Clock className="w-4 h-4 text-white flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-white/90 font-medium truncate">Inscrições abertas</p>
              <p className="text-xs text-white/70 truncate">Vagas limitadas</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onOpenModal}
            className="group relative bg-white hover:bg-white/95 text-primary font-bold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 whitespace-nowrap"
          >
            <span className="text-sm sm:text-base">Garantir minha vaga</span>
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
