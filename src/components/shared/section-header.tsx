import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "./animate-on-scroll";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
  headingId?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
  className,
  light = false,
  headingId,
}: SectionHeaderProps) {
  return (
    <AnimateOnScroll
      className={cn(
        "mb-8 max-w-3xl sm:mb-10 md:mb-12",
        centered && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider sm:mb-4 sm:px-4 sm:py-1.5 sm:text-xs",
            light
              ? "bg-white/20 text-white"
              : "bg-primary/10 text-primary"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        id={headingId}
        className={cn(
          "font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed sm:mt-4 sm:text-lg",
            light ? "text-white/80" : "text-body"
          )}
        >
          {description}
        </p>
      )}
    </AnimateOnScroll>
  );
}
