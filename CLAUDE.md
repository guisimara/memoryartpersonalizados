# MemoryART Personalizados

Landing page de vendas para o kit digital "Iniciando na Papelaria Personalizada" da MemoryART.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** com tema customizado
- **shadcn/ui** (Radix UI) para componentes base
- **React Router DOM** para roteamento
- **TanStack Query** para gerenciamento de estado assíncrono

## Comandos

```bash
npm run dev       # servidor de desenvolvimento (localhost:5173)
npm run build     # build de produção
npm run preview   # preview do build
npm run test      # testes
npm run lint      # lint
```

## Estrutura

```
src/
  pages/
    Index.tsx        # página principal (landing page completa)
    NotFound.tsx     # 404
  components/
    memory/          # componentes exclusivos da MemoryART
      CTAButton.tsx  # botão de call-to-action
      Placeholder.tsx # placeholder para imagens ainda não inseridas
      Section.tsx    # seção com tons de cor
      Sticker.tsx    # Tag, DottedDivider, WashiTape
    ui/              # componentes shadcn/ui
  hooks/
  lib/
```

## Design System

### Paleta de cores (Tailwind custom)

| Nome     | Uso                        |
|----------|----------------------------|
| rosa     | cor principal da marca     |
| menta    | CTA principal, checks      |
| lilas    | prova social, quem somos   |
| azul     | seção kit/solução          |
| amarelo  | destaques, tags            |
| pessego  | recapitulação              |
| cream    | fundo padrão, hero, footer |

Cada cor tem variante `.soft` (ex: `bg-rosa-soft`, `bg-menta-soft`).

### Fontes

- `font-display` → Baloo 2 (títulos, logo)
- `font-body` → Nunito (corpo de texto, padrão)

### Classes utilitárias

- `sticker` → card com bordas arredondadas e sombra leve (definida no CSS global)
- `container-mobile` → container centralizado com padding mobile-first

## Componentes chave

### `<Section tone="rosa|menta|azul|amarelo|lilas|pessego|cream">`
Seção com padding e tom de fundo configurável.

### `<CTAButton variant="menta|rosa|azul">`
Botão de ação grande, arredondado, com sombra.

### `<Placeholder label="..." aspect="square|video|tall" tone="...">`
Placeholder cinza para imagens ainda não inseridas. Substituir por `<img>` quando as imagens reais chegarem.

### `<Tag color="...">`, `<DottedDivider />`, `<WashiTape />`
Elementos decorativos de papelaria.

## Contexto do negócio

- **Produto:** kit digital de papelaria personalizada
- **Preço:** R$ 9,11 (de R$ 422,00)
- **Criadoras:** Karina Utria e Nica Pinheiro
- **Público:** mulheres que querem renda extra em casa, sem experiência prévia
- **Plataforma de venda:** a definir (link do CTA ainda não configurado)

## Pendências / Placeholders

Todos os `<Placeholder>` na página precisam ser substituídos por imagens reais:
- Mockup do kit (hero e seção oferta)
- Capas dos 6 módulos
- Prints de depoimentos (4)
- Fotos de Karina e Nica
- Mockup do pacote completo

Os links dos botões CTA (`href` ou `onClick`) precisam receber a URL real da plataforma de pagamento.
