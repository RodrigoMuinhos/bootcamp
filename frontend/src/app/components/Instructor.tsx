import { Code, Rocket, Server, Boxes } from 'lucide-react';

export function Instructor() {
  const achievements = [
    {
      title: "Projetos reais em produção",
      description: "APIs e sistemas publicados, do zero ao deploy.",
    },
    {
      title: "Mentoria prática",
      description: "Foco em mercado, pair programming e revisão de código.",
    },
    {
      title: "Especialista em Backend",
      description: "Java • Spring Boot • APIs REST • Docker",
    },
    {
      title: "Visão de produto e arquitetura",
      description: "Código limpo, boas práticas e escalabilidade.",
    },
  ];

  return (
    <section className="py-16 bg-[#111827] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <span className="text-sm text-accent">Seu Instrutor</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Aprenda com quem<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              vive tecnologia praticando
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 items-center">
          {/* Image destaque */}
          <div className="relative w-full max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-accent/25 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/20">
              <img
                src="/rodrigo.png"
                alt="Orientador Rodrigo Muinhos"
                className="w-full h-[420px] object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Orientador Rodrigo Muinhos</h3>
                <p className="text-lg text-muted-foreground">
                  Desenvolvedor Backend • Arquiteto de Sistemas em Formação • Mentor Técnico
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 justify-start md:justify-end">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card/80 border border-border text-sm font-semibold">
                  <Code className="w-4 h-4 text-primary" /> Java
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card/80 border border-border text-sm font-semibold">
                  <Rocket className="w-4 h-4 text-accent" /> Next.js
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-card/80 border border-border text-sm font-semibold">
                  <Server className="w-4 h-4 text-primary" /> Docker
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border hover:border-accent/50 transition-colors"
                >
                  <h4 className="font-semibold text-accent mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}