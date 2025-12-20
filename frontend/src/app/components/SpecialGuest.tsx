import { Shield, Network, Server, Star } from 'lucide-react';

export function SpecialGuest() {
  const expertise = [
    { 
      icon: Network,
      title: "Infraestrutura e Redes",
      description: "Arquitetura de redes corporativas e gerenciamento de infraestrutura crítica"
    },
    { 
      icon: Server,
      title: "Internet e Conectividade",
      description: "Gestão de servidores, DNS, balanceamento de carga e alta disponibilidade"
    },
    { 
      icon: Shield,
      title: "Segurança da Informação",
      description: "Firewalls, proteção de perímetro, políticas de segurança e compliance"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm text-accent font-medium">Convidado Especial</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Aula Masterclass com<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Sênior
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-3xl font-bold mb-4">Murilo Muinhos</h3>
              <p className="text-xl text-muted-foreground mb-6">
                Sênior em Infraestrutura e Redes, Internet e Segurança
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Com vasta experiência em infraestrutura de TI e segurança da informação, Murilo é responsável 
                por garantir que sistemas críticos funcionem de forma segura, escalável e ininterrupta em 
                ambientes corporativos de alta demanda.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Na aula especial da 11ª semana, ele vai compartilhar conhecimentos práticos sobre como 
                aplicações realmente funcionam em produção, os principais erros que devs iniciantes cometem 
                com infraestrutura e segurança, e o que as empresas realmente esperam de um desenvolvedor 
                que sabe pensar além do código.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-4">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-accent/50 transition-all"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-card/50 to-secondary/50 backdrop-blur-sm border-2 border-accent/40 rounded-3xl p-8 shadow-2xl shadow-accent/20">
              <div className="text-center space-y-6">
                {/* Foto destaque */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full blur-xl opacity-60"></div>
                  <div className="relative w-56 h-56 mx-auto bg-gradient-to-br from-accent to-primary rounded-full overflow-hidden shadow-2xl shadow-accent/40 border-4 border-background">
                    <img src="/murilo.jpeg" alt="Murilo Muinhos" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Info */}
                <div>
                  <h4 className="text-3xl font-bold mb-2">Murilo Muinhos</h4>
                  <p className="text-accent text-lg font-semibold mb-6">Sênior</p>
                  <div className="space-y-3">
                    <div className="px-4 py-3 bg-accent/15 border border-accent/30 rounded-xl hover:border-accent/50 transition-all">
                      <span className="text-accent font-semibold text-sm">Infraestrutura</span>
                    </div>
                    <div className="px-4 py-3 bg-accent/15 border border-accent/30 rounded-xl hover:border-accent/50 transition-all">
                      <span className="text-accent font-semibold text-sm">Redes e Internet</span>
                    </div>
                    <div className="px-4 py-3 bg-accent/15 border border-accent/30 rounded-xl hover:border-accent/50 transition-all">
                      <span className="text-accent font-semibold text-sm">Segurança</span>
                    </div>
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