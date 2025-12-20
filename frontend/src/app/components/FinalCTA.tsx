import { Rocket, Zap, Calendar } from 'lucide-react';

interface FinalCTAProps {
  onOpenModal: () => void;
}

export function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0E1A] to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(247,52,122,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,110,0.08),transparent_50%)]"></div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="bg-gradient-to-br from-[#FF6B35] via-[#F7347A] to-[#FF006E] rounded-3xl p-12 lg:p-16 shadow-2xl shadow-primary/20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-white">Vagas Limitadas - Turma 2025</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Comece sua jornada dev<br />
              com o pé direito
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Não fique apenas assistindo tutoriais. Construa um projeto real, 
              aprenda a fazer deploy e destaque-se no mercado de tecnologia.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">12 Semanas</div>
                <div className="text-white/80">de conteúdo intensivo</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1 Projeto</div>
                <div className="text-white/80">completo no portfólio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80">prático e aplicável</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button className="px-10 py-5 bg-white hover:bg-white/90 text-primary rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-xl group" onClick={onOpenModal}>
                <Rocket className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
                <span className="font-semibold">Inscrever-se Agora</span>
              </button>
            </div>

            {/* Date info */}
            <div className="flex items-center justify-center gap-3 text-white/80 pt-4">
              <Calendar className="w-5 h-5" />
              <span>Início: Janeiro de 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}