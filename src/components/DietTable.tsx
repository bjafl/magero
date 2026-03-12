import type { DietData } from "@/types";

interface DietTableProps {
  dietData: DietData;
}

export function DietTable({ dietData }: DietTableProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* More of */}
      <div className="bg-surface-g rounded-2xl p-4 border border-surface-g-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">↑</span>
          <span className="font-fraunces font-bold text-[15px] text-primary">
            Mer av
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {dietData.moreOf.map((row) => (
            <div
              key={row.category}
              className="flex gap-2.5 items-start"
            >
              <span className="text-lg leading-[1.3] shrink-0">{row.icon}</span>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-fraunces font-semibold text-[13px] text-primary">
                    {row.category}
                  </span>
                  {row.priority && (
                    <span className="bg-primary text-primary-foreground text-[9px] px-1.5 py-px rounded-full font-dm-mono">
                      fokus
                    </span>
                  )}
                </div>
                <span className="text-[12px] text-primary/70 font-dm-mono">
                  {row.items.join(" · ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Less of */}
      <div className="bg-surface-w rounded-2xl p-4 border border-surface-w-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">↓</span>
          <span className="font-fraunces font-bold text-[15px] text-warm-text">
            Mindre av
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {dietData.lessOf.map((row) => (
            <div key={row.category} className="flex gap-2.5 items-start">
              <span className="text-lg leading-[1.3] shrink-0">{row.icon}</span>
              <div>
                <span className="font-fraunces font-semibold text-[13px] text-warm-text block mb-0.5">
                  {row.category}
                </span>
                <span className="text-[12px] text-warm-subtext font-dm-mono">
                  {row.items.join(" · ")}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 px-3 py-2.5 bg-warm-text/6 rounded-xl border-l-[3px] border-[#C8860A]">
          <span className="text-[12px] text-warm-text font-dm-mono italic">
            Ingen forbud – retning, ikke regler ✦
          </span>
        </div>
      </div>
    </div>
  );
}
