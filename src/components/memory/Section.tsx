import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  tone?: "cream" | "rosa" | "azul" | "menta" | "lilas" | "amarelo";
  id?: string;
  className?: string;
}

const tones: Record<string, string> = {
  cream: "bg-transparent",
  rosa: "bg-rosa-soft",
  azul: "bg-azul-soft",
  menta: "bg-menta-soft",
  lilas: "bg-lilas-soft",
  amarelo: "bg-amarelo-soft",
};

export const Section = ({ children, tone = "cream", id, className }: Props) => (
  <section id={id} className={cn("w-full py-12 relative", tones[tone], className)}>
    <div className="container-mobile">{children}</div>
  </section>
);
