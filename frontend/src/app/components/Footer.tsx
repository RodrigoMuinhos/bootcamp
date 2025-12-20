import { Mail, Linkedin, Youtube, Instagram, Github, CalendarDays, CheckCircle2, MapPin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rodrigo-muinhos-a0503931b/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@Rodrigomuinhosdev", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/rodrigomuinhos.dev", label: "Instagram" },
    { icon: Github, href: "https://github.com/RodrigoMuinhos", label: "GitHub" },
  ];

  return (
    <footer className="bg-[#0A0E1A] border-t border-border pt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col: Marca e resumo */}
          <div>
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CRM-Start</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Bootcamp completo de desenvolvimento Full Stack: do zero ao deploy em produção.
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-primary" /> Início: Janeiro 2025</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> 12 semanas intensivas</div>
            </div>
          </div>

          {/* Col: O Bootcamp */}
          <div>
            <h4 className="font-semibold mb-3">O Bootcamp</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a className="hover:text-accent" href="#roadmap">Roadmap Completo</a></li>
              <li><a className="hover:text-accent" href="#projeto">Projeto CRM</a></li>
              <li><a className="hover:text-accent" href="#instrutor">Instrutor</a></li>
              <li><a className="hover:text-accent" href="#faq">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col: Tecnologias */}
          <div>
            <h4 className="font-semibold mb-3">Tecnologias</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Java & Spring Boot</li>
              <li>Next.js & React</li>
              <li>PostgreSQL</li>
              <li>Docker & Deploy</li>
              <li>LGPD & Segurança</li>
            </ul>
          </div>

          {/* Col: Contato e redes */}
          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:rmtttbooking@gmail.com" className="hover:text-accent transition-colors">rmtttbooking@gmail.com</a>
              </div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> 100% Online</div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-accent/20 border border-border hover:border-accent rounded-lg flex items-center justify-center transition-all group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            <p>© 2025 CRM-Start Bootcamp. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido por Rodrigo Muinhos</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#termos" className="hover:text-accent">Termos de Uso</a>
            <a href="#privacidade" className="hover:text-accent">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
