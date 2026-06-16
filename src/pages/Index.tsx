import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTAButton } from "@/components/memory/CTAButton";
import { Placeholder } from "@/components/memory/Placeholder";
import { Section } from "@/components/memory/Section";
import { Tag, DottedDivider, WashiTape } from "@/components/memory/Sticker";
import { Check, Lock, ShieldCheck, Clock, AlertCircle, Sparkles } from "lucide-react";

const modules = [
  { title: "Pack Exclusivos Editáveis com Diversos Modelos e Temas", desc: "Templates prontos fáceis de editar para personalizar pelo computador ou celular, em poucos toques.", tone: "rosa" as const },
  { title: "Biblioteca Criativa Digital Elementos e Papéis Digitais", desc: "Biblioteca com mais de 15.000 estampas, fundos e elementos digitais para personalizar suas peças.", tone: "azul" as const },
  { title: "Manual de Montagem Completo", desc: "Um guia, passo a passo em aulas com etapas práticas de todas as peças, do corte à montagem.", tone: "menta" as const },
  { title: "Lista de Materiais para Começar", desc: "Um documento organizado com todas as ferramentas necessárias para trabalhar com qualidade e eficiência.", tone: "amarelo" as const },
  { title: "Manual de Impressão Completa", desc: "Configuração completa de impressão profissional, mais qualidade no resultado das suas peças.", tone: "lilas" as const },
  { title: "Protocolo Primeira Venda", desc: "Metodologia completa comprovada para vender seus personalizados. Como divulgar, onde encontrar clientes e como transformar seu produto em pedidos diários.", tone: "pessego" as const },
];

const dores = [
  { icon: "💸", text: "Quer uma renda extra, mas não sabe por onde começar." },
  { icon: "📱", text: "Acha que precisa de equipamentos caros ou computador potente." },
  { icon: "🧩", text: "Se perde entre tantos tutoriais soltos na internet." },
  { icon: "⏰", text: "Falta de tempo entre a casa, os filhos e o trabalho." },
];

const paraVoce = [
  "Quer ter uma renda extra trabalhando de casa",
  "Sonha em empreender com algo delicado e criativo",
  "Não tem experiência, mas tem vontade de aprender",
  "Quer usar só o celular para começar",
  "Deseja um passo a passo organizado e simples",
  "Quer fazer parte do mundo da papelaria personalizada",
  "Quer fazer 10k por mês com papelaria personalizada",
];

const resumo = [
  { item: "Pack Exclusivos Editáveis com Diversos Modelos e Temas", valor: "R$ 97,00" },
  { item: "Biblioteca Criativa Digital Elementos e Papéis Digitais", valor: "R$ 147,00" },
  { item: "Manual de Montagem Completo", valor: "R$ 97,00" },
  { item: "Lista de Materiais para Começar", valor: "R$ 47,00" },
  { item: "Manual de Impressão Completa", valor: "R$ 67,00" },
  { item: "Protocolo Primeira Venda", valor: "R$ 142,00" },
];

const faqs = [
  { q: "Qual o prazo de acesso?", a: "Você tem acesso imediato após a confirmação do pagamento, direto no seu e-mail." },
  { q: "O pagamento é seguro?", a: "Sim! Utilizamos plataformas com criptografia e proteção total das suas informações." },
  { q: "O curso é para iniciantes?", a: "Sim, foi feito do zero, especialmente para quem nunca teve contato com papelaria personalizada." },
  { q: "Preciso fazer algum investimento?", a: "Apenas o valor do kit. Você pode começar usando o que já tem em casa e o celular." },
  { q: "Tem garantia?", a: "Sim, garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro." },
  { q: "Como vou acessar o conteúdo depois de comprar?", a: "Você recebe um login para acessar a área de membros pelo celular ou computador, quando quiser." },
];

const sectionTitleStyle: React.CSSProperties = { fontSize: "1.9rem" };

const Index = () => {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="w-full pt-6 pb-3 bg-cream/60 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container-mobile flex items-center justify-center">
          <img src="/images/logotipo-v1.png" alt="MemoryART" style={{ height: "4rem" }} className="object-contain" />
        </div>
      </header>

      {/* HERO */}
      <Section className="!py-10" tone="cream">
        <div className="text-center animate-fade-in">
          <Tag color="amarelo" className="mb-4">✨ Novo kit digital</Tag>

          <h1 className="font-display font-extrabold text-foreground mb-3 leading-[1.15]" style={{ fontSize: "2.8rem" }}>
            O passo a passo simples para começar do zero aos 10k com{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-rosa">Papelaria Personalizada</span>
              <span className="absolute inset-x-0 bottom-1 h-2 bg-amarelo/70 -z-0 rounded-full" />
            </span>
            , mesmo sem experiência e usando apenas seu celular.
          </h1>

          <h2 className="text-muted-foreground mb-5 px-2 font-normal" style={{ fontSize: "1.3rem" }}>
            Um kit completo, delicado e organizado para você dar os primeiros passos com confiança 💕
          </h2>

          <ul className="text-left max-w-xs mx-auto space-y-2 mb-6" style={{ fontSize: "1rem" }}>
            {[
              "Comece usando só o celular",
              "Sem experiência prévia",
              "Modelos prontos e fáceis de editar",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 font-semibold">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-menta flex items-center justify-center">
                  <Check className="w-3 h-3 text-foreground" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="relative mb-6 flex justify-center">
            <WashiTape className="-top-2 left-4" />
            <WashiTape className="-top-2 right-4 !rotate-[8deg]" />
            <img
              src="/images/hero-banner-att.png"
              alt="Kit MemoryART"
              className="rounded-3xl object-cover"
              style={{ width: "80%" }}
            />
          </div>

          <div className="flex justify-center">
            <CTAButton variant="menta" onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}>
              QUERO ENTRAR AGORA →
            </CTAButton>
          </div>
          <p className="text-muted-foreground mt-3 flex items-center justify-center gap-1" style={{ fontSize: "1rem" }}>
            <Lock className="w-3 h-3" /> Acesso imediato • Compra 100% segura
          </p>
        </div>
      </Section>

      <DottedDivider />

      {/* PROVA SOCIAL */}
      <Section tone="lilas">
        <div className="text-center mb-6">
          <Tag color="lilas">Prova social</Tag>
          <h2 className="font-display font-extrabold mt-3 leading-tight" style={sectionTitleStyle}>
            Muitas mulheres já começaram a faturar, trabalhando em casa com Papelaria Personalizada.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[1,2,3,4].map((i) => (
            <Placeholder key={i} label={`Print depoimento ${i}`} aspect="tall" tone={(["rosa","menta","azul","amarelo"] as const)[i-1]} />
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-4 italic">
          *Resultados variam conforme dedicação e aplicação do conteúdo.
        </p>
      </Section>

      {/* DORES */}
      <Section tone="rosa">
        <div className="text-center mb-6">
          <Tag color="rosa">Eu te entendo</Tag>
          <h2 className="font-display font-extrabold mt-3 leading-tight" style={sectionTitleStyle}>
            Eu sei que você precisa de uma renda, mas se sente travada, sem saber por onde começar.
          </h2>
        </div>
        <div className="space-y-3">
          {dores.map((d) => (
            <div key={d.text} className="sticker p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rosa-soft flex items-center justify-center text-xl flex-shrink-0">
                {d.icon}
              </div>
              <p className="font-semibold leading-snug">{d.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* REFLEXÃO */}
      <Section tone="cream">
        <div className="text-center mb-5">
          <Tag color="amarelo">Reflexão</Tag>
          <h2 className="font-display font-extrabold mt-3" style={sectionTitleStyle}>
            Você sabe do que eu estou falando, né?
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-5">
          Essa vontade de começar algo seu, ganhar dinheiro com criatividade e transformar uma habilidade simples em uma nova fonte de renda… mas, ao mesmo tempo, não saber exatamente por onde começar.
        </p>
        <div className="border-2 border-dashed border-rosa rounded-3xl p-4 bg-rosa-soft flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-rosa flex-shrink-0 mt-0.5" />
          <p className="font-semibold leading-snug">
            E é por isso que o MemoryART existe: para te entregar um caminho organizado, simples e encantador. Porque quando você tem o passo a passo certo, fica muito mais fácil sair da ideia e chegar na sua primeira venda.
          </p>
        </div>
      </Section>

      {/* SOLUÇÃO / KIT */}
      <Section tone="azul" id="kit">
        <div className="text-center mb-6">
          <Tag color="azul">A solução</Tag>
          <h2 className="font-display font-extrabold mt-3 leading-tight" style={sectionTitleStyle}>
            Veja tudo o que você vai receber se inscrevendo hoje no{" "}
            <span className="text-rosa">do zero aos 10k com papelaria personalizada</span>.
          </h2>
        </div>
        <div className="space-y-4">
          {modules.map((m, i) => {
            const moduleImages: Record<number, string> = { 0: "/images/modulo1.png", 1: "/images/modulo2.png", 2: "/images/modulo3.png", 3: "/images/modulo4.png", 4: "/images/modulo5.png", 5: "/images/modulo6.png" };
            return (
              <div key={m.title} className="sticker p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-menta flex items-center justify-center font-display font-extrabold text-sm">
                    {i + 1}
                  </span>
                  <Tag color={m.tone}>Módulo {String(i + 1).padStart(2, "0")}</Tag>
                </div>
                {moduleImages[i] ? (
                  <img src={moduleImages[i]} alt={m.title} className="w-full rounded-2xl mb-3 object-cover" />
                ) : (
                  <Placeholder label={`Capa do módulo ${i + 1}`} aspect="video" tone={m.tone} className="mb-3" />
                )}
                <h4 className="font-display font-extrabold text-lg leading-tight mb-1">{m.title}</h4>
                <p className="text-muted-foreground">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* PARA QUEM É */}
      <Section tone="menta">
        <div className="text-center mb-5">
          <Tag color="menta">Para quem é</Tag>
          <h2 className="font-display font-extrabold mt-3 leading-tight" style={sectionTitleStyle}>
            O Protocolo 10k com Papelaria Personalizada é para você que…
          </h2>
        </div>
        <div className="sticker p-5">
          <ul className="space-y-3">
            {paraVoce.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-menta flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="font-semibold leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* RECAPITULAÇÃO */}
      <Section tone="cream">
        <div className="text-center mb-5">
          <Tag color="pessego">Recapitulando</Tag>
          <h2 className="font-display font-extrabold mt-3" style={sectionTitleStyle}>
            Tudo o que você recebe hoje
          </h2>
        </div>
        <div className="sticker p-5">
          <ul className="divide-y divide-dashed divide-border">
            {resumo.map((r) => (
              <li key={r.item} className="flex justify-between items-center py-2.5">
                <span className="font-semibold pr-2">{r.item}</span>
                <span className="text-muted-foreground line-through font-bold whitespace-nowrap">{r.valor}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t-2 border-dashed border-rosa text-center">
            <p className="text-muted-foreground">Valor total estimado</p>
            <p className="font-display text-xl line-through text-muted-foreground">de R$ 597,00</p>
            <p className="font-display text-2xl font-extrabold text-rosa mt-2">com 97% de desconto especial 🎁</p>
            <p className="font-bold text-muted-foreground mt-1">Oferta por tempo limitado</p>
          </div>
        </div>
      </Section>

      {/* OFERTA PRINCIPAL */}
      <Section tone="rosa" id="oferta">
        <div className="text-center mb-5">
          <Tag color="rosa">Oferta especial</Tag>
        </div>
        <div className="relative">
          <WashiTape className="-top-2 left-1/2 -translate-x-1/2 !rotate-[-4deg] !w-24" />
          <div className="sticker p-6 border-2 border-dashed border-rosa">
            <img
              src="/images/hero-banner-att.png"
              alt="Kit MemoryART"
              className="w-full rounded-2xl mb-5"
            />
            <div className="text-center">
              <p className="uppercase tracking-widest font-bold text-muted-foreground">Acesso imediato</p>
              <p className="font-display font-extrabold mt-2 mb-4 text-foreground leading-snug" style={{ fontSize: "2rem" }}>
                Kit Protocolo 10k com Papelaria Personalizada
              </p>
              <ul className="text-left space-y-2 mb-5">
                {resumo.map((r) => (
                  <li key={r.item} className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 font-semibold">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-menta flex items-center justify-center">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      {r.item}
                    </span>
                    <span className="text-muted-foreground line-through font-bold whitespace-nowrap text-sm">{r.valor}</span>
                  </li>
                ))}
              </ul>
              <p className="font-display">de <span className="line-through text-muted-foreground">R$ 597,00</span> por</p>
              <p className="font-display font-extrabold text-rosa my-2" style={{ fontSize: "5rem", lineHeight: 1 }}>R$ 47,90</p>
              <p style={{ fontSize: "1.5rem" }}>ou 6x de <strong>R$ 8,79</strong> no cartão</p>
              <p className="font-semibold mt-1">à vista no Pix ou Cartão</p>
              <div className="mt-5 flex justify-center">
                <CTAButton variant="menta">QUERO ENTRAR AGORA →</CTAButton>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Tag color="menta">🔒 Pagamento seguro</Tag>
                <Tag color="azul">⚡ Acesso imediato</Tag>
                <Tag color="amarelo">🛡️ Garantia 7 dias</Tag>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PAGAMENTO */}
      <Section tone="cream">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: <ShieldCheck className="w-5 h-5" />, t: "Pagamento seguro" },
            { icon: <Sparkles className="w-5 h-5" />, t: "Pix • Cartão • Boleto" },
            { icon: <Clock className="w-5 h-5" />, t: "Acesso imediato" },
          ].map((p) => (
            <div key={p.t} className="sticker p-3 text-center">
              <div className="w-9 h-9 mx-auto rounded-full bg-menta-soft flex items-center justify-center mb-2">{p.icon}</div>
              <p className="font-bold leading-tight" style={{ fontSize: "0.75rem" }}>{p.t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOBRE AS CRIADORAS */}
      <Section tone="lilas">
        <div className="text-center mb-5">
          <Tag color="lilas">Quem somos</Tag>
          <h2 className="font-display font-extrabold mt-3 leading-tight" style={sectionTitleStyle}>
            Roselaine e Letícia são as criadoras do{" "}
            <span className="text-rosa">Kit Protocolo 10k com Papelaria Personalizada</span>.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex flex-col items-center gap-2">
            <Placeholder label="Foto Roselaine" aspect="square" tone="rosa" />
            <p className="font-bold text-center">Roselaine</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Placeholder label="Foto Letícia" aspect="square" tone="azul" />
            <p className="font-bold text-center">Letícia</p>
          </div>
        </div>
        <div className="sticker p-4">
          <p className="leading-relaxed text-center">
            Apaixonadas por papelaria personalizada, criaram um método delicado e simples para que outras
            mulheres possam começar do zero, com confiança, leveza e organização.
          </p>
        </div>
      </Section>

      {/* GARANTIA / OPÇÕES */}
      <Section tone="azul">
        <div className="text-center mb-6">
          <Tag color="azul">Decisão</Tag>
          <h2 className="font-display font-extrabold mt-3" style={sectionTitleStyle}>
            Agora você tem duas opções:
          </h2>
        </div>
        <div className="space-y-4">
          <div className="sticker p-5 border-l-4 border-rosa">
            <Tag color="rosa" className="mb-2">Opção 1</Tag>
            <p className="font-semibold leading-snug">
              Continuar exatamente onde está, sem dar o primeiro passo, e ver o tempo passar com a mesma vontade de empreender.
            </p>
          </div>
          <div className="sticker p-5 border-l-4 border-menta">
            <Tag color="menta" className="mb-2">Opção 2</Tag>
            <p className="font-semibold leading-snug">
              Entrar hoje no Kit Protocolo 10k com Papelaria Personalizada por apenas R$47,90 (ou 6x de R$8,79) e finalmente começar sua jornada com um passo a passo claro.
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <CTAButton variant="menta" onClick={() => document.getElementById("oferta2")?.scrollIntoView({ behavior: "smooth" })}>
            ESCOLHO A OPÇÃO 2 💕
          </CTAButton>
        </div>
      </Section>

      {/* REPETIÇÃO DA OFERTA */}
      <Section tone="rosa" id="oferta2">
        <div className="sticker p-5 border-2 border-dashed border-rosa text-center">
          <Tag color="amarelo" className="mb-3">Última chance</Tag>
          <img
            src="/images/hero-banner-att.png"
            alt="Kit MemoryART"
            className="w-full rounded-2xl mb-4"
          />
          <p className="font-display font-extrabold text-foreground mb-1" style={{ fontSize: "1.7rem" }}>
            Kit Protocolo 10k com Papelaria Personalizada
          </p>
          <p className="font-display text-muted-foreground">de <span className="line-through">R$ 597,00</span> por</p>
          <p className="font-display font-extrabold text-rosa" style={{ fontSize: "3rem", lineHeight: 1.1 }}>R$ 47,90</p>
          <p className="text-muted-foreground mb-4" style={{ fontSize: "1.3rem" }}>ou 6x de <strong>R$ 8,79</strong> no cartão</p>
          <div className="flex justify-center">
            <CTAButton variant="rosa">GARANTIR MEU ACESSO →</CTAButton>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <div className="text-center mb-5">
          <Tag color="lilas">Dúvidas</Tag>
          <h2 className="font-display font-extrabold mt-3" style={sectionTitleStyle}>Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="sticker px-4 border-0">
              <AccordionTrigger className="text-left font-display font-bold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* FOOTER */}
      <footer className="bg-foreground/95 text-cream py-10 mt-4">
        <div className="container-mobile text-center">
          <div className="flex items-center justify-center mb-5">
            <img src="/images/logotipo-v1.png" alt="MemoryART" className="h-12 object-contain" />
          </div>
          <p className="opacity-60 leading-relaxed max-w-xs mx-auto mb-4" style={{ fontSize: "0.75rem" }}>
            Este produto é digital e não garante resultados financeiros. Os resultados dependem
            exclusivamente da dedicação e aplicação do conteúdo por parte do aluno.
          </p>
          <p className="opacity-50 leading-relaxed max-w-sm mx-auto mb-5" style={{ fontSize: "0.7rem" }}>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. A compra desse material não garante nenhum tipo de resultado. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais de alunos.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 opacity-80" style={{ fontSize: "0.75rem" }}>
            <a href="#" className="hover:text-rosa transition-colors">Termos de uso</a>
            <span>•</span>
            <a href="#" className="hover:text-rosa transition-colors">Política de privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-rosa transition-colors">Contato</a>
          </div>
          <p className="opacity-50 mt-5" style={{ fontSize: "0.7rem" }}>© {new Date().getFullYear()} MemoryART. Feito com 💕</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
