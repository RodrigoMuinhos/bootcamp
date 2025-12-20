import { Code, Rocket, Award, Zap } from 'lucide-react';

export function Solution() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-sm text-accent">A Solução</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Um bootcamp completo com<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              foco em resultados reais
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Saia do básico e construa um projeto profissional que vai impressionar recrutadores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Aprendizado Prático</h3>
            <p className="text-muted-foreground leading-relaxed">Codifique do zero um sistema CRM completo, aplicando cada conceito na prática.</p>
          </div>
          <div
            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Deploy Real</h3>
            <p className="text-muted-foreground leading-relaxed">Aprenda a colocar sua aplicação no ar, do desenvolvimento até a produção.</p>
          </div>
          <div
            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Tecnologias Atuais</h3>
            <p className="text-muted-foreground leading-relaxed">React, Node.js, PostgreSQL, Docker e outras ferramentas usadas no mercado.</p>
          </div>
          <div
            className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mentorias ao Vivo</h3>
            <p className="text-muted-foreground leading-relaxed">Tire dúvidas e aprenda com profissionais experientes em sessões exclusivas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}