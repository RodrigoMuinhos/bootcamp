export function Journey() {
  const steps = [
    {
      number: 1,
      title: "Faça sua inscrição.",
      description: "Garanta sua vaga e entre para a turma 2025",
    },
    {
      number: 2,
      title: "Participe das mentorias ao vivo com os melhores experts do mercado.",
      description: "Aprenda diretamente com profissionais experientes",
    },
    {
      number: 3,
      title: "Faça networking e aprenda em comunidade.",
      description: "Conecte-se com outros devs e cresça junto",
    },
    {
      number: 4,
      title: "Pratique com desafios de código.",
      description: "Resolva problemas reais e desenvolva suas habilidades",
    },
    {
      number: 5,
      title: "Construa seu portfólio com projetos práticos.",
      description: "Crie um CRM completo do zero ao deploy em produção",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Como é a sua jornada no Bootcamp</h2>
      
      {/* Timeline Container */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-100">
        {/* Timeline Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-1 bg-gradient-to-r from-primary via-accent to-primary" style={{top: '2.5rem'}}></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center md:items-center">
                {/* Step Circle */}
                <div className="relative z-10 mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">
                    {step.number}
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
