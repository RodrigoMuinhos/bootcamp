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
    <div className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-[#FF6B35]/20 via-[#F7347A]/15 to-[#FF006E]/10 backdrop-blur supports-[backdrop-filter]:via-card/50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold">CRM-Startweb</div>
            <div className="text-xs text-muted-foreground">Bootcamp Full Stack</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm">
            <AlarmClock className="w-4 h-4 text-primary" />
            <span className="font-medium">Oferta especial termina em:</span>
          </div>
          {ended ? (
            <div className="px-3 py-2 rounded-xl bg-destructive text-destructive-foreground text-sm font-semibold">
              Encerrada
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center px-3 py-2 rounded-xl bg-primary/10 border border-primary/20">
                <span className="text-lg font-bold tabular-nums">{hours.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-muted-foreground">HORAS</span>
              </div>
              <div className="flex flex-col items-center px-3 py-2 rounded-xl bg-primary/10 border border-primary/20">
                <span className="text-lg font-bold tabular-nums">{minutes.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-muted-foreground">MIN</span>
              </div>
              <div className="flex flex-col items-center px-3 py-2 rounded-xl bg-primary/10 border border-primary/20">
                <span className="text-lg font-bold tabular-nums">{seconds.toString().padStart(2, '0')}</span>
                <span className="text-[10px] text-muted-foreground">SEG</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
