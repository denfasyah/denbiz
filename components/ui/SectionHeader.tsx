import React from "react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-primary font-semibold text-xs tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className={cn("font-display font-bold text-4xl md:text-[40px] leading-tight tracking-tight text-on-surface mt-4", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-on-surface-variant leading-relaxed mt-4",
            align === "left" && "max-w-lg mt-3"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
