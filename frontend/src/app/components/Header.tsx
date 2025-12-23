'use client';

import { useEffect, useMemo, useState } from 'react';
import { Code2, AlarmClock } from 'lucide-react';

function msToHMS(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
}

export function Header() {
  // Permite configurar via env: NEXT_PUBLIC_COUNTDOWN_DEADLINE (ISO ou timestamp)
  const targetMs = useMemo(() => {
    const raw = process.env.NEXT_PUBLIC_COUNTDOWN_DEADLINE;
    if (raw) {
      const parsed = Number(raw);
      if (!Number.isNaN(parsed)) return parsed;
      const d = new Date(raw).getTime();
      if (!Number.isNaN(d)) return d;
    }
    // Default: +6 horas
    return Date.now() + 6 * 60 * 60 * 1000;
  }, []);

  const [remaining, setRemaining] = useState(() => Math.max(0, targetMs - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => {
        const next = Math.max(0, targetMs - Date.now());
        return next;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const { hours, minutes, seconds } = msToHMS(remaining);
  const ended = remaining <= 0;

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-[#FF6B35]/20 via-[#F7347A]/15 to-[#FF006E]/10 backdrop-blur supports-[backdrop-filter]:via-card/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo Section - Always visible */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-fit">
          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-accent text-white flex-shrink-0">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="leading-tight">
            <div className="text-xs sm:text-sm sm:text-base font-semibold">CRM-Startweb</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground">Bootcamp de Desenvolvimento</div>
          </div>
        </div>

        {/* Countdown Section - Responsive */}
        <div className="flex items-center gap-1 sm:gap-2 ml-auto">
          {ended ? (
            <div className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-destructive text-destructive-foreground text-xs sm:text-sm font-semibold whitespace-nowrap">
              Encerrada
            </div>
          ) : (
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="flex flex-col items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20">
                <span className="text-sm sm:text-lg font-bold tabular-nums">{hours.toString().padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[10px] text-muted-foreground">H</span>
              </div>
              <div className="flex flex-col items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20">
                <span className="text-sm sm:text-lg font-bold tabular-nums">{minutes.toString().padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[10px] text-muted-foreground">M</span>
              </div>
              <div className="flex flex-col items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20">
                <span className="text-sm sm:text-lg font-bold tabular-nums">{seconds.toString().padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[10px] text-muted-foreground">S</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
