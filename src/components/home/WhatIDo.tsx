export default function WhatIDo() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col gap-6">
        <h3 className="text-2xl font-semibold">O que eu resolvo com código</h3>

        <ul className="grid gap-4 text-sm sm:text-base text-[var(--color-text-secondary)]">
          <li>• Backends e APIs críticas em Go e Node.js (TypeScript)</li>
          <li>• Sistemas de alta concorrência: eventos, integrações e baixa latência</li>
          <li>• Frontend moderno com React e Next.js (interfaces rápidas e consistentes)</li>
          <li>• Apps com React Native quando faz sentido entregar experiência mobile</li>
          <li>• Arquitetura limpa (Clean Architecture, SOLID) e manutenção de longo prazo</li>
          <li>• Observabilidade real: métricas, logs e rastreabilidade</li>
        </ul>
      </div>
    </section>
  );
}
