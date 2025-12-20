'use client';

import { useState } from 'react';
import { Mail, Rocket } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Falha ao assinar');
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0A0E1A] to-background overflow-hidden">
      {/* subtle radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(16,185,129,0.08),transparent_55%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6 text-primary">
          <Rocket className="w-4 h-4" />
          <span className="font-medium">Vamos aprender juntos</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Pratique comigo<br /><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">desenvolvendo soluções reais</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Receba dicas, projetos práticos e aprendizados diretos do mercado. Vamos colocar a mão na massa e construir juntos.
        </p>

        <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center gap-3 bg-muted border border-border rounded-xl px-4 py-3 w-full sm:w-[520px]">
            <Mail className="w-5 h-5 text-primary" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu melhor email"
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:from-primary/90 hover:to-accent/90 transition disabled:opacity-70"
          >
            {status === 'loading' ? 'Assinando...' : 'ASSINAR'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-3 text-sm text-accent">Inscrição confirmada! Em breve envio novidades.</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-destructive">Não foi possível assinar agora. Tente novamente.</p>
        )}
      </div>
    </section>
  );
}
