const items = [
  {
    title: "Diagnóstico rápido e prioridades",
    description:
      "Entendo o contexto, riscos e objetivos. Corto ruído e foco no que gera impacto real no produto.",
  },
  {
    title: "Arquitetura que aguenta crescimento",
    description:
      "Projeto soluções sustentáveis: modularidade, contratos claros, código testável e evolução segura.",
  },
  {
    title: "Entrega com qualidade e previsibilidade",
    description:
      "Ciclo de entrega pragmático: pequenas melhorias contínuas, observabilidade e controle de incidentes.",
  },
  {
    title: "Performance e confiabilidade",
    description:
      "Otimizo gargalos de concorrência, latência e integração — com métricas e rastreabilidade de ponta a ponta.",
  },
];

export default function HowIGenerateValue() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8">
          <header className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold">Como eu gero valor</h3>
            <p className="text-[var(--color-text-secondary)] max-w-3xl">
              Meu foco não é “fazer funcionar”. É entregar software que sustenta o
              negócio: previsível, observável e pronto para escalar.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-lg
                  border border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  p-6
                "
              >
                <div className="flex items-start gap-4">
                  {/* Placeholder para ícone/imagem */}
                  <div
                    className="
                      h-10 w-10 rounded-md
                      border border-[var(--color-border)]
                      bg-black/20
                      shrink-0
                    "
                  />

                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="
              rounded-lg
              border border-[var(--color-border)]
              p-6
              bg-black/20
            "
          >
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
              Se você precisa de alguém para construir ou evoluir um sistema com
              responsabilidade técnica de verdade — do backend ao frontend —
              vamos conversar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
