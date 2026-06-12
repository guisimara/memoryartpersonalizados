import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTAButton } from "@/components/memory/CTAButton";
import { Placeholder } from "@/components/memory/Placeholder";
import { Section } from "@/components/memory/Section";
import { Tag, DottedDivider, WashiTape } from "@/components/memory/Sticker";
import { Check, Heart, Lock, ShieldCheck, Clock, AlertCircle, Star, Sparkles, Scissors, PenTool } from "lucide-react";

const modules = [
  { title: "Pack Exclusivo com Modelos Fáceis de Editar", desc: "Templates prontos para personalizar no celular em poucos toques.", tone: "rosa" as const },
  { title: "Biblioteca Criativa Digital", desc: "Mais de 5.000 elementos em papel e digital para suas criações.", tone: "azul" as const },
  { title: "Guia de Montagem Completo", desc: "Passo a passo ilustrado para montar cada peça com perfeição.", tone: "menta" as const },
  { title: "Check List de Materiais para Começar", desc: "Lista enxuta do que você realmente precisa para iniciar.", tone: "amarelo" as const },
  { title: "Manual Expresso de Impressão", desc: "Configurações certas para imprimir bonito mesmo em casa.", tone: "lilas" as const },
  { title: "Manual da Primeira Venda", desc: "Como atrair sua primeira cliente e fechar a venda com confiança.", tone: "pessego" as const },
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
];

const resumo = [
  { item: "Pack de Modelos Editáveis", valor: "R$ 97,00" },
  { item: "Biblioteca Criativa Digital", valor: "R$ 147,00" },
  { item: "Guia de Montagem Completo", valor: "R$ 67,00" },
  { item: "Check List de Materiais", valor: "R$ 27,00" },
  { item: "Manual Expresso de Impressão", valor: "R$ 37,00" },
  { item: "Manual da Primeira Venda", valor: "R$ 47,00" },
];

const faqs = [
  { q: "Qual o prazo de acesso?", a: "Você tem acesso imediato após a confirmação do pagamento, direto no seu e-mail." },
  { q: "O pagamento é seguro?", a: "Sim! Utilizamos plataformas com criptografia e proteção total das suas informações." },
  { q: "O curso é para iniciantes?", a: "Sim, foi feito do zero, especialmente para quem nunca teve contato com papelaria personalizada." },
  { q: "Preciso fazer algum investimento?", a: "Apenas o valor do kit. Você pode começar usando o que já tem em casa e o celular." },
  { q: "Tem garantia?", a: "Sim, garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro." },
  { q: "Como vou acessar o conteúdo depois de comprar?", a: "Você recebe um login para acessar a área de membros pelo celular ou computador, quando quiser." },
];

const Logo = () => (
  <div className="flex flex-col items-center gap-0.5">
    <div className="flex items-center gap-1.5">
      <Heart className="w-4 h-4 fill-rosa text-rosa" />
      <h1 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
        Memory<span className="text-rosa">ART</span>
      </h1>
      <Scissors className="w-4 h-4 text-lilas" />
    </div>
    <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-foreground">
      Papelaria Personalizada
    </p>
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="w-full pt-6 pb-3 bg-cream/60 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container-mobile flex items-center justify-center">
          <Logo />
        </div>
      </header>

      {/* HERO */}
      <Section className="!py-10" tone="cream">
        <div className="text-center animate-fade-in">
          <Tag color="amarelo" className="mb-4">✨ Novo kit digital</Tag>
          <h2 className="font-display text-[26px] leading-[1.15] font-extrabold text-foreground mb-3">
            O passo a passo simples para começar do zero na{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-rosa">Papelaria Personalizada</span>
              <span className="absolute inset-x-0 bottom-1 h-2 bg-amarelo/70 -z-0 rounded-full" />
            </span>
            , mesmo sem experiência e usando apenas seu celular.
          </h2>
          <p className="text-sm text-muted-foreground mb-5 px-2">
            Um kit completo, delicado e organizado para você dar os primeiros passos com confiança 💕
          </p>

          <ul className="text-left max-w-xs mx-auto space-y-2 mb-6">
            {[
              "Comece usando só o celular",
              "Sem experiência prévia",
              "Modelos prontos e fáceis de editar",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm font-semibold">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-menta flex items-center justify-center">
                  <Check className="w-3 h-3 text-foreground" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="relative mb-6">
            <WashiTape className="-top-2 left-4" />
            <WashiTape className="-top-2 right-4 !rotate-[8deg]" />
            <Placeholder label="Mockup do kit / mesa de festa" aspect="square" tone="rosa" />
          </div>

          <CTAButton variant="menta" onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}>
            QUERO ENTRAR AGORA →
          </CTAButton>
          <p className="text-[11px] text-muted-foreground mt-3 flex items-center justify-center gap-1">
            <Lock className="w-3 h-3" /> Acesso imediato • Compra 100% segura
          </p>
        </div>
      </Section>

      <DottedDivider />

      {/* PROVA SOCIAL */}
      <Section tone="lilas">
        <div className="text-center mb-6">
          <Tag color="lilas">Prova social</Tag>
          <h3 className="font-display text-2xl font-extrabold mt-3 leading-tight">
            Muitas mulheres já começaram a faturar, trabalhando em casa com Papelaria Personalizada.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[1,2,3,4].map((i) => (
            <Placeholder key={i} label={`Print depoimento ${i}`} aspect="tall" tone={(["rosa","menta","azul","amarelo"] as const)[i-1]} />
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 italic">
          *Resultados variam conforme dedicação e aplicação do conteúdo.
        </p>
      </Section>

      {/* DORES */}
      <Section tone="rosa">
        <div className="text-center mb-6">
          <Tag color="rosa">Eu te entendo</Tag>
          <h3 className="font-display text-2xl font-extrabold mt-3 leading-tight">
            Eu sei que você precisa de uma renda, mas se sente travada, sem saber por onde começar.
          </h3>
        </div>
        <div className="space-y-3">
          {dores.map((d) => (
            <div key={d.text} className="sticker p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rosa-soft flex items-center justify-center text-xl flex-shrink-0">
                {d.icon}
              </div>
              <p className="text-sm font-semibold leading-snug">{d.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* VOCÊ SABIA */}
      <Section tone="cream">
        <div className="text-center mb-5">
          <Tag color="amarelo">Reflexão</Tag>
          <h3 className="font-display text-2xl font-extrabold mt-3">
            Você sabia do que eu estou falando, né mesmo?
          </h3>
        </div>
        <p className="text-sm text-center text-muted-foreground mb-5">
          Você não está sozinha. Muitas mulheres sentem o mesmo: vontade de empreender,
          mas sem saber qual o primeiro passo. A boa notícia é que existe um caminho organizado, simples e fofo para você seguir.
        </p>
        <div className="border-2 border-dashed border-rosa rounded-3xl p-4 bg-rosa-soft flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-rosa flex-shrink-0 mt-0.5" />
          <p className="text-sm font-semibold leading-snug">
            <strong>Atenção:</strong> sem um passo a passo claro, é fácil desistir antes mesmo da primeira venda.
            O kit MemoryART foi feito justamente para te guiar.
          </p>
        </div>
      </Section>

      {/* SOLUÇÃO / KIT */}
      <Section tone="azul" id="kit">
        <div className="text-center mb-6">
          <Tag color="azul">A solução</Tag>
          <h3 className="font-display text-[22px] font-extrabold mt-3 leading-tight">
            Veja tudo o que você vai receber se inscrevendo hoje no{" "}
            <span className="text-rosa">Iniciando na Papelaria Personalizada</span>.
          </h3>
        </div>
        <div className="space-y-4">
          {modules.map((m, i) => (
            <div key={m.title} className="sticker p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-menta flex items-center justify-center font-display font-extrabold text-sm">
                  {i + 1}
                </span>
                <Tag color={m.tone}>Módulo {i + 1}</Tag>
              </div>
              <Placeholder label={`Capa do módulo ${i + 1}`} aspect="video" tone={m.tone} className="mb-3" />
              <h4 className="font-display font-extrabold text-lg leading-tight mb-1">{m.title}</h4>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PARA VOCÊ QUE */}
      <Section tone="menta">
        <div className="text-center mb-5">
          <Tag color="menta">É para você</Tag>
          <h3 className="font-display text-2xl font-extrabold mt-3 leading-tight">
            O Iniciando na Papelaria Personalizada é para você que…
          </h3>
        </div>
        <div className="sticker p-5">
          <ul className="space-y-3">
            {paraVoce.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-menta flex items-center justify-center">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* RECAPITULAÇÃO */}
      <Section tone="cream">
        <div className="text-center mb-5">
          <Tag color="pessego">Recapitulando</Tag>
          <h3 className="font-display text-2xl font-extrabold mt-3">
            Tudo o que você recebe hoje
          </h3>
        </div>
        <div className="sticker p-5">
          <ul className="divide-y divide-dashed divide-border">
            {resumo.map((r) => (
              <li key={r.item} className="flex justify-between items-center py-2.5 text-sm">
                <span className="font-semibold pr-2">{r.item}</span>
                <span className="text-muted-foreground line-through font-bold">{r.valor}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t-2 border-dashed border-rosa text-center">
            <p className="text-xs text-muted-foreground">Valor total estimado</p>
            <p className="font-display text-xl line-through text-muted-foreground">de R$ 422,00</p>
            <p className="font-display text-3xl font-extrabold text-rosa mt-1">por apenas R$ 9,11</p>
            <p className="text-xs font-bold text-menta-foreground mt-1">economia de mais de 97%</p>
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
            <Placeholder label="Mockup do pacote completo" aspect="square" tone="rosa" className="mb-5" />
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Acesso imediato</p>
              <p className="font-display text-sm mt-1">de <span className="line-through">R$ 422,00</span> por</p>
              <p className="font-display text-5xl font-extrabold text-rosa my-2">R$ 9,11</p>
              <p className="text-sm font-semibold">à vista no Pix ou cartão</p>
              <div className="mt-5">
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
              <p className="text-[11px] font-bold leading-tight">{p.t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOBRE AS CRIADORAS */}
      <Section tone="lilas">
        <div className="text-center mb-5">
          <Tag color="lilas">Quem somos</Tag>
          <h3 className="font-display text-xl font-extrabold mt-3 leading-tight">
            Karina Utria e Nica Pinheiro são as criadoras do{" "}
            <span className="text-rosa">Iniciando na Papelaria Personalizada</span>.
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Placeholder label="Foto Karina" aspect="square" tone="rosa" />
          <Placeholder label="Foto Nica" aspect="square" tone="azul" />
        </div>
        <div className="sticker p-4">
          <p className="text-sm leading-relaxed text-center">
            Apaixonadas por papelaria personalizada, criaram um método delicado e simples para que outras
            mulheres possam começar do zero, com confiança, leveza e organização.
          </p>
        </div>
      </Section>

      {/* GARANTIA / OPÇÕES */}
      <Section tone="azul">
        <div className="text-center mb-6">
          <Tag color="azul">Decisão</Tag>
          <h3 className="font-display text-2xl font-extrabold mt-3">
            Agora você tem duas opções:
          </h3>
        </div>
        <div className="space-y-4">
          <div className="sticker p-5 border-l-4 border-rosa">
            <Tag color="rosa" className="mb-2">Opção 1</Tag>
            <p className="text-sm font-semibold leading-snug">
              Continuar exatamente onde está, sem dar o primeiro passo, e ver o tempo passar com a mesma vontade de empreender.
            </p>
          </div>
          <div className="sticker p-5 border-l-4 border-menta">
            <Tag color="menta" className="mb-2">Opção 2</Tag>
            <p className="text-sm font-semibold leading-snug">
              Entrar hoje no kit MemoryART por R$9,11 e finalmente começar sua jornada na papelaria personalizada com um passo a passo claro.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <CTAButton variant="menta" onClick={() => document.getElementById("oferta2")?.scrollIntoView({ behavior: "smooth" })}>
            ESCOLHO A OPÇÃO 2 💕
          </CTAButton>
        </div>
      </Section>

      {/* REPETIÇÃO DA OFERTA */}
      <Section tone="rosa" id="oferta2">
        <div className="sticker p-5 border-2 border-dashed border-rosa text-center">
          <Tag color="amarelo" className="mb-3">Última chance</Tag>
          <Placeholder label="Mockup do kit" aspect="video" tone="rosa" className="mb-4" />
          <p className="font-display text-4xl font-extrabold text-rosa">R$ 9,11</p>
          <p className="text-xs text-muted-foreground mb-4">à vista no Pix ou cartão</p>
          <CTAButton variant="rosa">GARANTIR MEU ACESSO →</CTAButton>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <div className="text-center mb-5">
          <Tag color="lilas">Dúvidas</Tag>
          <h3 className="font-display text-2xl font-extrabold mt-3">Perguntas frequentes</h3>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="sticker px-4 border-0">
              <AccordionTrigger className="text-left font-display font-bold text-sm hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* FOOTER */}
      <footer className="bg-foreground/95 text-cream py-10 mt-4">
        <div className="container-mobile text-center">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <Heart className="w-4 h-4 fill-rosa text-rosa" />
            <h4 className="font-display text-xl font-extrabold">
              Memory<span className="text-rosa">ART</span>
            </h4>
            <PenTool className="w-4 h-4 text-lilas" />
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase font-bold opacity-70 mb-5">
            Papelaria Personalizada
          </p>
          <p className="text-[11px] opacity-60 leading-relaxed max-w-xs mx-auto mb-4">
            Este produto é digital e não garante resultados financeiros. Os resultados dependem
            exclusivamente da dedicação e aplicação do conteúdo por parte do aluno.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] opacity-80">
            <a href="#" className="hover:text-rosa transition-colors">Termos de uso</a>
            <span>•</span>
            <a href="#" className="hover:text-rosa transition-colors">Política de privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-rosa transition-colors">Contato</a>
          </div>
          <p className="text-[10px] opacity-50 mt-5">© {new Date().getFullYear()} MemoryART. Feito com 💕</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
