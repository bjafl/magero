import type { MacroBalance } from "@/types";

interface MacroDonutProps {
  macroBalance: MacroBalance[];
}

export function MacroDonut({ macroBalance }: MacroDonutProps) {
  const size = 160;
  const cx = size / 2;
  const cy = size / 2;
  const r = 58;
  const strokeW = 20;
  const circ = 2 * Math.PI * r;

  let offset = 0;
  const segments = macroBalance.map((m) => {
    const len = (m.value / 100) * circ;
    const seg = {
      ...m,
      dasharray: `${len - 2} ${circ - len + 2}`,
      dashoffset: -offset,
    };
    offset += len;
    return seg;
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg
          width={size}
          height={size}
          style={{ transform: "rotate(-90deg)" }}
        >
          {segments.map((seg, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeW}
              strokeDasharray={seg.dasharray}
              strokeDashoffset={seg.dashoffset}
              strokeLinecap="butt"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[11px] text-[#8A8680] font-dm-mono">
            balanse
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 w-full">
        {macroBalance.map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <div
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: m.color }}
            />
            <span className="font-fraunces text-[13px] text-[#2C2A27] flex-1">
              {m.label}
            </span>
            <span className="font-dm-mono text-[12px] text-[#6B8F47] font-semibold">
              {m.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
