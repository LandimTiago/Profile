const items = [
  {
    title: "Sistemas críticos",
    description:
      "Experiência em ambientes onde estabilidade, observabilidade e performance são obrigatórios.",
  },
  {
    title: "Alta concorrência",
    description:
      "Serviços backend voltados a throughput, baixa latência e processamento de eventos.",
  },
  {
    title: "Arquitetura limpa",
    description:
      "Clean Architecture, SOLID e código sustentável para evoluir sem quebrar tudo.",
  },
  {
    title: "Integrações complexas",
    description:
      "Redis, Postgres, WebSockets, mensageria e integrações entre múltiplos sistemas.",
  },
];

export default function Highlights() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                rounded-lg
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-5
              "
            >
              <h3 className="font-semibold text-[var(--color-text-primary)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
