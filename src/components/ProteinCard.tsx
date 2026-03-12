import type { ProteinSource } from "@/types";

interface ProteinCardProps {
  source: ProteinSource;
}

export function ProteinCard({ source }: ProteinCardProps) {
  return (
    <div className="bg-card rounded-2xl p-3.5 flex items-center gap-3 border border-border shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      <span className="text-2xl">{source.emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="font-fraunces font-semibold text-sm text-primary">
            {source.name}
          </span>
          <span className="font-dm-mono text-[11px] text-ring font-semibold">
            {source.score}
          </span>
        </div>
        <div className="h-1 bg-progress-track rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-700 ease-out"
            style={{
              width: `${source.score}%`,
              background: "linear-gradient(90deg, #2D5016, #6B8F47)",
            }}
          />
        </div>
        <span className="text-[10px] text-muted-foreground font-dm-mono mt-0.5 block">
          {source.tag}
        </span>
      </div>
    </div>
  );
}
