import { Star, Shield, MapPin, Award, Building2, Linkedin } from 'lucide-react';

export function SpecialClass() {
  return (
    <section className="py-16 bg-[#0A0E1A] relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-accent fill-accent" />
            <span className="font-semibold text-accent">Aula Especial Exclusiva</span>
          </div>
        </div>

        {/* LinkedIn-style card */}
        <div className="bg-gradient-to-br from-card via-secondary to-card border border-accent/30 rounded-2xl overflow-hidden relative">
          <div className="px-8 pt-8 pb-8 relative">
            {/* Profile picture - destaque */}
            <div className="relative mb-8 flex flex-col items-start">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl -z-10 w-56 h-56"></div>
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent to-primary p-2 shadow-2xl shadow-accent/40">
                <div className="w-full h-full rounded-full bg-card overflow-hidden flex items-center justify-center border-4 border-background">
                  <img src="/murilo.jpeg" alt="Murilo Muinhos" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Name and title */}
            <div className="mb-8 text-left">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-4xl font-bold">Murilo Muinhos</h3>
                <div className="w-6 h-6 rounded-full bg-[#0A66C2] flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Network Security Analyst | Sênior
              </p>
              <div className="flex flex-wrap items-start gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  <span>Grupo NTSec</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Fortaleza, Ceará, Brazil</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>500+ conexões</span>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/murilomuinhos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full transition-all duration-200 font-semibold shadow-lg shadow-orange-500/30"
              >
                <Linkedin className="w-5 h-5" />
                Connect
              </a>
            </div>

            {/* Expertise areas */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Áreas de Especialização</h4>
              <div className="flex flex-wrap gap-2">
                <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium">
                  Infraestrutura
                </div>
                <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium">
                  Redes e Internet
                </div>
                <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium">
                  Segurança
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-6 pb-6 border-b border-border">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Certificações</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CCNA | CCSM-ELITE | CCSM | CCME | CCVS | CCMS | CCAS | CCSE | CCSA | ACA-Campus | ITILv3 | FCP | SD-WAN in Progress
              </p>
            </div>

            {/* What you'll learn */}
            <div>
              <h4 className="font-semibold mb-4">O que você vai aprender nesta masterclass:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Segurança Avançada</h5>
                    <p className="text-sm text-muted-foreground">
                      HTTPS, autenticação, proteção contra vulnerabilidades
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Infraestrutura Profissional</h5>
                    <p className="text-sm text-muted-foreground">
                      Deploy, escalabilidade e arquitetura de redes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
