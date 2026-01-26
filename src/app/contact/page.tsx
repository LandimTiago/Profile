export default function ContactPage() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Contato</h1>

          <p className="text-[var(--color-text-secondary)] max-w-2xl">
            Se você precisa de engenharia sólida para construir ou evoluir um
            sistema — do backend ao frontend — este é o melhor ponto de partida.
          </p>
        </header>

        {/* Contact options */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <div
            className="
              rounded-lg
              border border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-6
              flex flex-col gap-3
            "
          >
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Canal principal para contato profissional.
            </p>

            <a
              href="mailto:seuemail@exemplo.com"
              className="
                mt-2
                inline-block
                text-sm
                text-[var(--color-magenta)]
                hover:text-[var(--color-magenta-hover)]
              "
            >
              seuemail@exemplo.com
            </a>
          </div>

          {/* LinkedIn */}
          <div
            className="
              rounded-lg
              border border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-6
              flex flex-col gap-3
            "
          >
            <h3 className="font-semibold text-lg">LinkedIn</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Histórico profissional completo e conexões.
            </p>

            <a
              href="https://www.linkedin.com/in/landim-tiago/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-2
                inline-block
                text-sm
                text-[var(--color-magenta)]
                hover:text-[var(--color-magenta-hover)]
              "
            >
              Acessar perfil →
            </a>
          </div>

          {/* GitHub */}
          <div
            className="
              rounded-lg
              border border-[var(--color-border)]
              bg-[var(--color-surface)]
              p-6
              flex flex-col gap-3
            "
          >
            <h3 className="font-semibold text-lg">GitHub</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Código, projetos técnicos e experimentos.
            </p>

            <a
              href="https://github.com/LandimTiago"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-2
                inline-block
                text-sm
                text-[var(--color-magenta)]
                hover:text-[var(--color-magenta-hover)]
              "
            >
              Ver repositórios →
            </a>
          </div>

          {/* WhatsApp */}
          <div
            className="
    rounded-lg
    border border-[var(--color-border)]
    bg-[var(--color-surface)]
    p-6
    flex flex-col gap-3
  "
          >
            <h3 className="font-semibold text-lg">WhatsApp</h3>

            <p className="text-sm text-[var(--color-text-secondary)]">
              Canal direto para conversas rápidas e alinhamento inicial.
            </p>

            <a
              href="https://wa.me/5541985157750"
              target="_blank"
              rel="noopener noreferrer"
              className="
      mt-2
      inline-block
      text-sm
      text-[var(--color-magenta)]
      hover:text-[var(--color-magenta-hover)]
    "
            >
              Iniciar conversa →
            </a>
          </div>

          {/* CTA */}
          <div
            className="
              rounded-lg
              border border-[var(--color-border)]
              bg-black/20
              p-6
              flex flex-col justify-between gap-4
            "
          >
            <div>
              <h3 className="font-semibold text-lg">Vamos conversar</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Explique rapidamente o contexto e o tipo de desafio que você
                está enfrentando. Respondo assim que possível.
              </p>
            </div>

            <a
              href="mailto:seuemail@exemplo.com"
              className="
                inline-block
                text-center
                px-6 py-3
                rounded-md
                bg-[var(--color-purple)]
                hover:bg-[var(--color-purple-hover)]
                text-white
                text-sm
                font-medium
              "
            >
              Enviar email
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
