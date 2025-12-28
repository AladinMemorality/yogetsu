"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const delayClass =
    delay > 0 ? `scroll-animate-delay-${Math.min(delay, 4)}` : "";

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "scroll-animate",
        isVisible && "is-visible",
        delayClass,
        className
      )}
    >
      {children}
    </div>
  );
}
