import { cn } from "@/lib/utils";

export const Tag = ({ children, color = "rosa", className }: { children: React.ReactNode; color?: "rosa"|"menta"|"azul"|"lilas"|"amarelo"|"pessego"; className?: string }) => {
  const map: Record<string,string> = {
    rosa: "bg-rosa text-foreground",
    menta: "bg-menta text-foreground",
    azul: "bg-azul text-foreground",
    lilas: "bg-lilas text-foreground",
    amarelo: "bg-amarelo text-foreground",
    pessego: "bg-pessego text-foreground",
  };
  return <span className={cn("tag-label", map[color], className)}>{children}</span>;
};

export const DottedDivider = () => (
  <div className="container-mobile py-4">
    <div className="dotted-divider" />
  </div>
);

export const WashiTape = ({ className = "" }: { className?: string }) => (
  <div className={`washi-tape ${className}`} />
);
