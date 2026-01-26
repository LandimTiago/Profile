import { Metadata } from "next";
import Link from "next/link";

const skills = [
  {
    label: "Backend",
    items: [
      "Golang",
      "Node.js",
      "TypeScript",
      "APIs REST",
      "WebSockets",
      "Alta concorrência",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Design Systems",
      "Interfaces performáticas",
    ],
  },
  {
    label: "Arquitetura",
    items: [
      "Clean Architecture",
      "SOLID",
      "Microsserviços",
      "Event-driven",
      "BFF",
    ],
  },
  {
    label: "Dados & Infra",
    items: [
      "PostgreSQL",
      "Redis",
      "Mensageria",
      "Observabilidade",
      "Ambientes produtivos",
    ],
  },
];

const principles = [
  {
    title: "Clareza > Complexidade",
    description:
      "Código existe para manter o produto vivo. Prefiro soluções simples, bem testadas e fáceis de evoluir.",
  },
  {
    title: "Decisões explícitas",
    description:
      "Arquitetura boa não é a que parece bonita — é a que reduz risco e aumenta previsibilidade.",
  },
  {
    title: "Métricas e rastreabilidade",
    description:
      "Se não dá pra medir e investigar, dá pra quebrar sem perceber. Observabilidade é parte do produto.",
  },
];

const timeline = [
  {
    title: "Foxbit — Backend Engineer (Golang)",
    description:
      "Atuação no desenvolvimento e manutenção de serviços críticos do ecossistema de trading e automação da Foxbit. Trabalho com Golang em aplicações escaláveis, seguras e observáveis, envolvendo APIs, integrações entre sistemas, processamento de eventos e otimização de performance em ambientes de alta concorrência. Forte foco em arquitetura limpa, estabilidade, rastreabilidade e qualidade de longo prazo.",
  },
  {
    title: "Meta — Desenvolvedor Full Stack",
    description:
      "Atuação em projetos de médio e grande porte envolvendo backend em Node.js e frontend em React. Inclui refatoração completa de sistema de SAC, construção de rede social baseada em microsserviços com mensageria (SQS) e desenvolvimento de portal centralizado para integração de chatbots voltados a atendimento, comunicação interna e campanhas.",
  },
  {
    title: "Techbridge Solutions — Desenvolvedor Full Stack",
    description:
      "Desenvolvimento de sistema para gestão de vendas e captura de leads, com integrações com HubSpot. Atuação em backend com Node.js e frontend com React, focando em automação de processos comerciais, eficiência operacional e melhoria do fluxo de vendas.",
  },
  {
    title: "UpCode Tecnologia — Desenvolvedor Full Stack",
    description:
      "Atuação em múltiplos projetos envolvendo APIs em Node.js e Java, sistemas de pagamento, ERP para varejo e aplicativos mobile. Experiência com microsserviços, mensageria (AWS SNS), BFFs e desenvolvimento de aplicações React e React Native para e-commerce e catálogos de vendas.",
  },
  {
    title: "Freelancer — Projetos sob demanda",
    description:
      "Desenvolvimento de soluções sob medida, incluindo landing pages, correções e melhorias em aplicações React e Node.js, além de projetos mobile com React Native. Forte foco em entregas rápidas, alinhadas à necessidade real do cliente.",
  },
  {
    title: "Prefeitura Municipal de Mandaguaçu — Assessor Executivo",
    description:
      "Atuação em funções estratégicas e administrativas antes da transição definitiva para tecnologia, desenvolvendo visão de processo, responsabilidade institucional e tomada de decisão em ambientes públicos.",
  },
];

export const metadata: Metadata = {
  title: "Sobre mim",
  description:
    "Conheça minha trajetória como engenheiro de software, minha experiência profissional e princípios de engenharia.",
};

export default function AboutPage() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col gap-16">
        {/* Abertura */}
        <header className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Sobre mim</h1>

          <p className="text-[var(--color-text-secondary)] max-w-3xl">
            Sou engenheiro de software com foco em backend e arquitetura,
            atuando na construção de sistemas robustos, escaláveis e orientados
            a resultado. Trabalho do backend ao frontend quando isso acelera
            entregas, reduz riscos e melhora a qualidade do produto final.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/projects"
              className="
                w-full sm:w-auto text-center
                px-6 py-3 rounded-md
                bg-[var(--color-purple)]
                hover:bg-[var(--color-purple-hover)]
                text-white text-sm font-medium
              "
            >
              Ver projetos
            </Link>

            <Link
              href="/contact"
              className="
                w-full sm:w-auto text-center
                px-6 py-3 rounded-md
                border border-[var(--color-border)]
                hover:border-[var(--color-text-primary)]
                text-sm font-medium
              "
            >
              Falar comigo
            </Link>
          </div>
        </header>

        {/* O que entrego */}
        <section
          className="
            rounded-lg
            border border-[var(--color-border)]
            bg-[var(--color-surface)]
            p-6
          "
        >
          <h2 className="text-xl font-semibold">
            O que você pode esperar de mim
          </h2>
          <ul className="mt-4 grid gap-3 text-sm sm:text-base text-[var(--color-text-secondary)]">
            <li>• Entrega previsível e focada no que move o produto</li>
            <li>• Arquitetura sustentável para evoluir sem retrabalho</li>
            <li>
              • Performance, concorrência e confiabilidade como prioridade
            </li>
            <li>• Visão de produto: engenharia a serviço de resultado</li>
          </ul>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Habilidades</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((group) => (
              <div
                key={group.label}
                className="
                  rounded-lg
                  border border-[var(--color-border)]
                  bg-black/20
                  p-6
                "
              >
                <h3 className="font-semibold">{group.label}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="
                        text-xs sm:text-sm
                        px-3 py-1 rounded-full
                        border border-[var(--color-border)]
                        text-[var(--color-text-secondary)]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Princípios */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Como eu penso engenharia</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="
                  rounded-lg
                  border border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  p-6
                "
              >
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Linha do tempo */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Experiência</h2>

          <div className="grid gap-4">
            {timeline.map((t) => (
              <div
                key={t.title}
                className="
                  rounded-lg
                  border border-[var(--color-border)]
                  p-6
                  bg-black/20
                "
              >
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section
          className="
            rounded-lg
            border border-[var(--color-border)]
            p-6
            bg-[var(--color-surface)]
          "
        >
          <h2 className="text-xl font-semibold">Vamos conversar?</h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--color-text-secondary)]">
            Se você está construindo algo que precisa de engenharia sólida e
            entrega com responsabilidade, me chama.
          </p>

          <div className="mt-4">
            <Link
              href="/contact"
              className="
                inline-block
                px-6 py-3 rounded-md
                bg-[var(--color-magenta)]
                hover:bg-[var(--color-magenta-hover)]
                text-white text-sm font-medium
              "
            >
              Ir para contato
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
