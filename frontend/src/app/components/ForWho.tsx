import { Users, Target, TrendingUp, Briefcase } from 'lucide-react';

export function ForWho() {
  const profiles = [
    {
      icon: Users,
      title: "Iniciantes em programação",
      description: "Você nunca programou profissionalmente, mas quer entrar no mercado tech com um projeto real no portfólio e habilidades práticas.",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: Target,
      title: "Estudantes de tecnologia",
      description: "Você está na faculdade ou curso técnico, mas sente que falta experiência prática. Aqui você constrói um sistema completo do zero ao deploy.",
      gradient: "from-accent to-accent/80"
    },
    {
      icon: TrendingUp,
      title: "Profissionais em transição",
      description: "Você quer migrar para a área de tecnologia e precisa de um portfólio forte, conhecimento aplicado e uma base sólida em desenvolvimento.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Briefcase,
      title: "Devs que querem evoluir",
      description: "Você já programa, mas quer dominar um stack moderno completo, aprender deploy profissional e construir sistemas escaláveis.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Para quem este bootcamp é recomendado?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Este bootcamp foi desenhado para quem quer dar o próximo passo na carreira tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${profile.gradient} shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {profile.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {profile.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}