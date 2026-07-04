import { ExternalLink } from "lucide-react";
import { MockupType, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function LaptopMockup({
  type,
  accent,
  title,
  subtitle,
}: {
  type: MockupType;
  accent: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="relative h-52 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(160deg, #101b34, #182a4d 60%, ${accent}25)`,
      }}
    >
      <div className="absolute top-5 left-0 right-0 text-center px-6 z-10">
        <h4 className="text-white font-display font-bold text-base leading-tight">
          {title}
        </h4>
        <p className="text-white/50 text-[11px] mt-0.5">{subtitle}</p>
      </div>

      <div
        className="absolute w-36 h-36 rounded-full blur-3xl opacity-40"
        style={{ background: accent }}
      />

      <div className="relative mt-9 w-[60%]">
        <div className="rounded-t-md border-[3px] border-b-0 border-slate-700 bg-[#0c1424] overflow-hidden shadow-2xl">
          <div className="flex items-center gap-1 px-2 py-1.5 bg-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
          <div className="aspect-[16/10] p-2">
            {type === "dashboard" && (
              <div className="h-full flex flex-col gap-1">
                <div className="grid grid-cols-4 gap-1">
                  {[
                    accent,
                    "rgba(255,255,255,0.15)",
                    "rgba(255,255,255,0.1)",
                    "rgba(255,255,255,0.08)",
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="h-4 rounded"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="flex-1 bg-white/5 rounded flex items-end p-1 gap-0.5">
                  {[50, 75, 35, 90, 60, 80, 45, 95, 70, 55].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        background:
                          i % 2 === 0 ? accent : "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            {type === "ecommerce" && (
              <div className="h-full flex flex-col gap-1">
                <div
                  className="h-6 rounded flex items-center px-1.5 gap-1"
                  style={{ background: accent + "30" }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: accent }}
                  />
                  <div className="h-1 flex-1 bg-white/30 rounded" />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex flex-col gap-0.5">
                      <div className="flex-1 rounded bg-white/10" />
                      <div
                        className="h-1 rounded"
                        style={{ background: accent + "80" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {type === "landing" && (
              <div className="h-full flex flex-col gap-1">
                <div
                  className="flex-[1.2] rounded flex flex-col items-center justify-center gap-1"
                  style={{
                    background: `linear-gradient(135deg, ${accent}30, transparent)`,
                  }}
                >
                  <div className="h-1.5 bg-white/60 rounded w-2/3" />
                  <div className="h-1 bg-white/30 rounded w-1/2" />
                  <div
                    className="h-2.5 rounded-full px-4 mt-0.5"
                    style={{ background: accent }}
                  />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded bg-white/5 border border-white/10"
                    />
                  ))}
                </div>
              </div>
            )}
            {type === "profile" && (
              <div className="h-full flex flex-col gap-1">
                <div className="flex gap-1.5 flex-[0.8]">
                  <div
                    className="w-1/3 rounded"
                    style={{ background: accent + "80" }}
                  />
                  <div className="flex-1 flex flex-col gap-1 justify-center">
                    <div className="h-1.5 bg-white/40 rounded w-3/4" />
                    <div className="h-1 bg-white/20 rounded w-1/2" />
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-4 gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="rounded bg-white/5 border border-white/10"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="h-2 bg-slate-700 rounded-b-lg mx-[-6%] shadow-lg" />
      </div>
    </div>
  );
}

export function ProjectCard({
  project,
  variant = "grid",
}: {
  project: Project;
  variant?: "grid" | "slider";
}) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface h-full",
        variant === "grid"
          ? "group soft-shadow hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          : "min-w-[85%] md:min-w-0 md:w-full snap-center soft-shadow"
      )}
    >
      <LaptopMockup
        type={project.mockupType}
        accent={project.accentColor}
        title={project.title}
        subtitle={project.subtitle}
      />

      <div className="flex flex-col flex-grow p-6">
        <div
          className={cn(
            "flex items-center mb-3",
            variant === "grid" ? "justify-between" : "justify-start"
          )}
        >
          <span
            className="px-3 py-1 rounded-full text-[11px] font-bold text-on-tertiary"
            style={{ background: project.accentColor }}
          >
            {project.category}
          </span>
          {variant === "grid" && (
            <span className="text-[11px] text-on-surface-variant/70">
              {project.client}
            </span>
          )}
        </div>

        <h3
          className={cn(
            "font-display font-bold text-lg text-on-surface mb-2",
            variant === "grid" &&
              "group-hover:text-primary transition-colors"
          )}
        >
          {project.title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-5 flex-grow">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        {variant === "grid" ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-4 border-t border-outline-variant/30 text-primary font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            Lihat Live
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-4 border-t border-outline-variant/30 text-primary font-semibold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            Lihat Live
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
