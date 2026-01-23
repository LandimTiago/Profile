export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-magenta text-sm font-semibold tracking-wide mb-3">
            SOFTWARE ENGINEER · BACKEND · GO
          </p>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-text-primary leading-tight">
            Construo sistemas
            <span className="block text-purple">robustos, escaláveis</span>
            e orientados a resultado
          </h1>

          <p className="mt-6 text-text-secondary text-base md:text-lg">
            Atuo no desenvolvimento de plataformas críticas, integrações de alto
            volume e sistemas financeiros com foco em performance, clareza
            arquitetural e impacto real no negócio.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="px-6 py-3 rounded-md bg-purple text-white font-medium hover:bg-purple-hover transition"
            >
              Ver projetos
            </a>

            <a
              href="/about"
              className="px-6 py-3 rounded-md border border-border text-text-primary hover:bg-white/5 transition"
            >
              Sobre mim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
