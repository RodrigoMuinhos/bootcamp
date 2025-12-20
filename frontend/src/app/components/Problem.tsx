import { Target, Zap, Users } from 'lucide-react';

export function Problem() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full mb-6">
            <span className="text-sm text-destructive">O Problema</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Por que tantos iniciantes<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              desistem da programação?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A maioria dos cursos não prepara você para o mercado de verdade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Falta de Experiência Prática</h3>
            <p className="text-muted-foreground leading-relaxed">Muitos cursos focam só na teoria, deixando você sem saber como aplicar no mundo real.</p>
          </div>
          <div
            className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Tecnologias Desatualizadas</h3>
            <p className="text-muted-foreground leading-relaxed">Aprender ferramentas antigas não prepara você para o mercado de trabalho atual.</p>
          </div>
          <div
            className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sem Projeto de Portfólio</h3>
            <p className="text-muted-foreground leading-relaxed">Difícil conseguir emprego sem demonstrar suas habilidades com projetos reais.</p>
          </div>
        </div>
      </div>
    </section>
  );
}