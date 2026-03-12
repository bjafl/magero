const tagColors: Record<string, string> = {
  "#japansk": "#e8f0e0",
  "#fisk": "#d4e8f0",
  "#lav-GI": "#e0f0d4",
  "#kylling": "#f0ead4",
  "#vegetar": "#d4f0e0",
  "#belgfrukter": "#e8d4f0",
  "#wok": "#f0d4d4",
  "#rask": "#d4f0f0",
  "#protein": "#f0e0d4",
  "#frokost": "#f0f0d4",
  "#kinesisk": "#f0d8d4",
  "#indonesisk": "#d4e8d4",
  "#sunt": "#d4f0e0",
  "#plantebasert": "#e0f0d4",
  "#enkel": "#d8e8f0",
  "#italiensk-inspirert": "#f0e8d4",
};

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  const bg = tagColors[label] ?? "#e8e8e8";
  return (
    <span
      className="font-dm-mono text-[11px] whitespace-nowrap rounded-full px-2 py-0.5 border border-black/[0.08]"
      style={{ background: bg, color: "#2C2A27" }}
    >
      {label}
    </span>
  );
}
