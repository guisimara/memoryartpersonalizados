import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "menta" | "rosa";
  children: React.ReactNode;
}

export const CTAButton = ({ variant = "menta", children, className, ...rest }: Props) => (
  <button
    className={cn("cta-button", variant === "rosa" && "cta-pink", className)}
    {...rest}
  >
    {children}
  </button>
);
