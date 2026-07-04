import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHeader({ title, subtitle, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-primary pt-36 pb-20 relative overflow-hidden">
      {/* Decorative patterns similar to main hero */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-tertiary/10 rounded-full blur-3xl -z-0 pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <div key={item.label} className="flex items-center gap-2">
                {item.href ? (
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-white font-medium" : ""}>
                    {item.label}
                  </span>
                )}
                {!isLast && <span>/</span>}
              </div>
            );
          })}
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          {subtitle && (
            <span className="text-tertiary font-bold tracking-widest text-xs uppercase mb-4 block">
              {subtitle}
            </span>
          )}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}