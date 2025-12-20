import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "O que é um Bootcamp?",
    answer: "Um bootcamp é um programa intensivo e prático focado em desenvolver habilidades profissionais em tecnologia. Diferente de cursos tradicionais, você aprende construindo projetos reais, com metodologia aplicada ao mercado de trabalho."
  },
  {
    question: "Preciso ter experiência prévia em programação?",
    answer: "Não! O bootcamp foi criado para iniciantes. Começamos do zero, ensinando fundamentos de programação e lógica aplicada ao backend, e evoluímos gradualmente até o deploy em produção."
  },
  {
    question: "Quanto tempo preciso dedicar por semana?",
    answer: "Recomendamos dedicar de 8 a 12 horas semanais para acompanhar as aulas, realizar os exercícios práticos e trabalhar no projeto. O ritmo é profissional, mas estruturado para quem está começando."
  },
  {
    question: "Vou receber certificado ao final?",
    answer: "Sim! Ao concluir o bootcamp e entregar o projeto final, você receberá um certificado de conclusão. Porém, o mais importante é ter um projeto real no seu portfólio e conhecimento aplicável ao mercado."
  },
  {
    question: "O bootcamp é realmente gratuito?",
    answer: "Sim! Neste momento estamos oferecendo as primeiras turmas gratuitamente para validar a metodologia e construir cases de sucesso. Aproveite esta oportunidade!"
  },
  {
    question: "Qual a diferença entre este bootcamp e tutoriais do YouTube?",
    answer: "Aqui você terá um caminho estruturado de 12 semanas, acompanhamento direto, projetos reais, deploy em produção e aula especial com especialista em infraestrutura. Não é apenas consumir conteúdo, mas construir um portfólio profissional."
  },
  {
    question: "E quanto a emprego após o bootcamp?",
    answer: "Não prometemos emprego. O que fazemos é preparar você com habilidades técnicas sólidas e um projeto real para o mercado. Você sairá com conhecimento em Full Stack, experiência em deploy e um portfólio profissional. O resto depende do seu desempenho, dedicação e de como você se posiciona no mercado."
  },
  {
    question: "Como posso tirar dúvidas durante o bootcamp?",
    answer: "As dúvidas serão tiradas nas aulas ao vivo e no fórum exclusivo do Discord, onde você terá suporte contínuo e poderá interagir com outros alunos e instrutores."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o bootcamp
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl overflow-hidden transition-all hover:border-primary/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-muted/50"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground border-t border-border pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}