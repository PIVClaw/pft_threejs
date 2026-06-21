import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`glow-card rounded-3xl border border-border bg-surface/80 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
