export default function ExperienceHighlight() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div
          className="
            flex flex-col gap-4
            border border-[var(--color-border)]
            rounded-lg
            p-6
            bg-[var(--color-surface)]
          "
        >
          <h3 className="text-xl font-semibold">
            Engenharia de software em ambiente de alta responsabilidade
          </h3>

          <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
            Atualmente atuo na Foxbit, trabalhando no desenvolvimento e manutenção
            de sistemas críticos do ecossistema de trading. Além do backend, também
            participo de entregas de interface quando o produto exige velocidade e
            consistência (React).
          </p>

          <ul className="grid gap-2 text-sm text-[var(--color-text-secondary)]">
            <li>• Serviços em Golang para operações de trading e automação</li>
            <li>• APIs escaláveis, seguras e observáveis</li>
            <li>• Processamento de eventos e integrações entre sistemas</li>
            <li>• Entregas de frontend com React quando necessário</li>
            <li>• Ambientes de alta concorrência e baixa latência</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
