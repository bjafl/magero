import type { DietData } from "@/types";

interface DietTableProps {
  dietData: DietData;
}

export function DietTable({ dietData }: DietTableProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* More of */}
      <div className="bg-[#f4f8ef] rounded-2xl p-4 border border-[#d4e8c4]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">↑</span>
          <span className="font-fraunces font-bold text-[15px] text-[#2D5016]">
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
                  <span className="font-fraunces font-semibold text-[13px] text-[#2D5016]">
                    {row.category}
                  </span>
                  {row.priority && (
                    <span className="bg-[#2D5016] text-white text-[9px] px-1.5 py-px rounded-full font-dm-mono">
                      fokus
                    </span>
                  )}
                </div>
                <span className="text-[12px] text-[#5a7040] font-dm-mono">
                  {row.items.join(" · ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Less of */}
      <div className="bg-[#fdf6f0] rounded-2xl p-4 border border-[#e8d4bc]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base">↓</span>
          <span className="font-fraunces font-bold text-[15px] text-[#8B4513]">
            Mindre av
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {dietData.lessOf.map((row) => (
            <div key={row.category} className="flex gap-2.5 items-start">
              <span className="text-lg leading-[1.3] shrink-0">{row.icon}</span>
              <div>
                <span className="font-fraunces font-semibold text-[13px] text-[#8B4513] block mb-0.5">
                  {row.category}
                </span>
                <span className="text-[12px] text-[#a06040] font-dm-mono">
                  {row.items.join(" · ")}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 px-3 py-2.5 bg-[rgba(139,69,19,0.06)] rounded-xl border-l-[3px] border-[#C8860A]">
          <span className="text-[12px] text-[#8B4513] font-dm-mono italic">
            Ingen forbud – retning, ikke regler ✦
          </span>
        </div>
      </div>
    </div>
  );
}
