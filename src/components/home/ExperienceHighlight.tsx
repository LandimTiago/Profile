export default function ExperienceHighlight() {
  return (
    <section
      className="
        flex flex-col gap-4
        border border-[var(--color-border)]
        rounded
        p-6
        bg-[var(--color-surface)]
      "
    >
      <h3 className="text-xl font-semibold">
        Engenharia de backend em ambiente de alta responsabilidade
      </h3>

      <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
        Atualmente atuo na Foxbit, uma das maiores corretoras de criptoativos do
        Brasil, trabalhando no desenvolvimento e manutenção de serviços críticos
        do ecossistema de trading.
      </p>

      <ul className="grid gap-2 text-sm text-[var(--color-text-secondary)]">
        <li>• Serviços em Golang para operações de trading e automação</li>
        <li>• APIs escaláveis, seguras e observáveis</li>
        <li>• Processamento de eventos e integrações entre sistemas</li>
        <li>• Arquitetura limpa aplicada a sistemas financeiros</li>
        <li>• Ambientes de alta concorrência e baixa latência</li>
      </ul>
    </section>
  );
}
