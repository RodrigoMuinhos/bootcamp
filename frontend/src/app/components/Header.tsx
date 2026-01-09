'use client';

import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-[#FF6B35]/20 via-[#F7347A]/15 to-[#FF006E]/10 backdrop-blur supports-[backdrop-filter]:via-card/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo Section - Always visible */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-fit">
          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-accent text-white flex-shrink-0">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="leading-tight">
            <div className="text-xs sm:text-base font-semibold">CRM-Startweb</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">Bootcamp de Desenvolvimento</div>
          </div>
        </div>

        {/* WhatsApp Group CTA */}
        <div className="flex items-center ml-auto">
          <a
            href="https://chat.whatsapp.com/BMoAhtm2ofhCRPxCgAcFmB"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center px-3 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white transition-all duration-200 shadow-lg shadow-primary/20 whitespace-nowrap"
            aria-label="Acessar grupo do WhatsApp"
          >
            <span className="text-xs sm:text-sm font-bold tracking-wide">Grupo do WhatsApp</span>
            <span className="text-[9px] sm:text-[10px] text-white/90 group-hover:text-white">Acesse agora</span>
          </a>
        </div>
      </div>
    </div>
  );
}
