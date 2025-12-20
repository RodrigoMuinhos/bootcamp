'use client';
import { Rocket, Code, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface HeroProps {
  onOpenModal: () => void;
  onShowRoadmap: () => void;
}

export function Hero({ onOpenModal, onShowRoadmap }: HeroProps) {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const carouselItems = [
    {
      src: '/car1.png',
      alt: 'Squad em planejamento',
      caption: 'Mentorias ao vivo com experts ensinando código pronto para produção.',
    },
    {
      src: '/car2.jpg',
      alt: 'Time colaborando',
      caption: 'Trabalho em squad simulando o dia a dia de uma equipe tech profissional.',
    },
    {
      src: '/car3.jpg',
      alt: 'Desenvolvimento em ação',
      caption: 'Deploy e observabilidade em nuvem com ferramentas profissionais.',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0A0E1A] via-[#111827] to-background overflow-hidden pt-16 pb-12">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm text-primary font-medium">Vagas Limitadas - Turma 2025</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Bootcamp<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CRM-Start
              </span><br />
              <span className="text-3xl lg:text-4xl text-muted-foreground">
                Do Zero ao Deploy
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Domine a stack completa de desenvolvimento: desde os fundamentos de Java até a
              construção de aplicações escaláveis prontas para produção, passando por Spring Boot,
              Next.js, Docker e deploy real.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-muted border border-border rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground font-medium">Java</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-muted border border-border rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground font-medium">Spring Boot</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-muted border border-border rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground font-medium">Next.js</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onOpenModal}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 group"
              >
                <Rocket className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                <span className="font-semibold">Inscrever-se Gratuitamente</span>
              </button>
              <button
                onClick={onShowRoadmap}
                className="px-8 py-4 bg-muted hover:bg-muted/80 border border-border text-foreground rounded-xl transition-all duration-200 font-semibold"
              >
                Ver Conteúdo Completo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 max-w-xl">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Semanas</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-bold text-primary">Full Stack</div>
                <div className="text-sm text-muted-foreground">Backend + Frontend</div>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <div className="text-3xl font-bold text-accent">Deploy Real</div>
                <div className="text-sm text-muted-foreground">Projeto no ar</div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative h-full">
            <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" aria-hidden />
            <div className="relative bg-card/60 border border-border rounded-2xl shadow-xl shadow-black/40 overflow-hidden">
              <Carousel className="relative" opts={{ loop: true, align: 'start' }} setApi={setApi}>
                <CarouselContent>
                  {carouselItems.map((item, idx) => (
                    <CarouselItem key={idx}>
                      <div className="flex flex-col">
                        <ImageWithFallback
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
                        />
                        <div className="p-4 border-t border-border text-sm text-muted-foreground bg-background/60">
                          {item.caption}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 bg-background/80 border-border" />
                <CarouselNext className="right-3 bg-background/80 border-border" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}