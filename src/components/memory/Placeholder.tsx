interface Props {
  label?: string;
  className?: string;
  aspect?: "square" | "video" | "tall" | "wide";
  tone?: "rosa" | "azul" | "menta" | "lilas" | "amarelo" | "pessego";
}

const toneMap: Record<string, string> = {
  rosa: "border-rosa bg-rosa-soft",
  azul: "border-azul bg-azul-soft",
  menta: "border-menta bg-menta-soft",
  lilas: "border-lilas bg-lilas-soft",
  amarelo: "border-amarelo bg-amarelo-soft",
  pessego: "border-pessego bg-pessego-soft",
};

const aspectMap = {
  square: "aspect-square",
  video: "aspect-video",
  tall: "aspect-[3/4]",
  wide: "aspect-[5/2]",
};

export const Placeholder = ({ label = "Adicionar imagem aqui", className = "", aspect = "square", tone = "rosa" }: Props) => (
  <div className={`relative w-full ${aspectMap[aspect]} border-2 border-dashed rounded-3xl flex flex-col items-center justify-center text-center p-4 ${toneMap[tone]} ${className}`}>
    <div className="text-2xl mb-1 opacity-70">🖼️</div>
    <p className="text-xs font-semibold text-foreground/60 leading-tight">{label}</p>
  </div>
);
