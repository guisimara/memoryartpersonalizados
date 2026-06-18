import { cn } from "@/lib/utils";

const KIWIFY_URL = "https://pay.kiwify.com.br/u7fQmEk";

function fireInitiateCheckout() {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "InitiateCheckout", {
      content_name: "Kit Protocolo 10k com Papelaria Personalizada",
      content_ids: ["kit-papelaria-10k"],
      content_type: "product",
      value: 47.90,
      currency: "BRL",
    });
  }
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "menta" | "rosa";
  children: React.ReactNode;
  href?: string;
}

export const CTAButton = ({ variant = "menta", children, className, href, onClick, ...rest }: Props) => {
  const cls = cn("cta-button", variant === "rosa" && "cta-pink", className);

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        onClick={fireInitiateCheckout}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      onClick={(e) => {
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export { KIWIFY_URL };
