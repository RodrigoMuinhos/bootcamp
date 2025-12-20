import { Code, Users, Calendar, Globe, Lock, Server } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Project() {
  const features = [
    { icon: Users, label: "Gestão de Clientes" },
    { icon: Calendar, label: "Agenda" },
    { icon: Globe, label: "API REST" },
    { icon: Lock, label: "Auth" },
    { icon: Server, label: "Deploy em Cloud" },
    { icon: Code, label: "Código Limpo" }
  ];

  return (
    <section id="projeto" className="py-16 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm text-primary">Projeto Real</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Construa um Sistema CRM<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              completo e profissional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do planejamento ao deploy: crie uma aplicação real que pode ir direto para o seu portfólio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NjYwNjE2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CRM Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">O que você vai construir:</h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Deploy Profissional</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Aprenda a fazer deploy usando Docker, CI/CD e boas práticas de infraestrutura. 
                    Seu projeto vai ficar disponível na internet, pronto para mostrar para empresas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}