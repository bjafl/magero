import type { Staple } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface StaplesViewProps {
  staples: Staple[];
}

export function StaplesView({ staples }: StaplesViewProps) {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-2.5">
      {staples.map((cat) => (
        <AccordionItem
          key={cat.cat}
          value={cat.cat}
          className="bg-white rounded-2xl border border-[#e8e8e2] overflow-hidden"
        >
          <AccordionTrigger className="px-4 py-3.5 hover:no-underline hover:bg-transparent [&>svg]:hidden">
            <div className="flex items-center gap-3 w-full">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: cat.color }}
              />
              <span className="font-fraunces font-bold text-[15px] text-[#2C2A27] flex-1 text-left">
                {cat.cat}
              </span>
              <span className="font-dm-mono text-[11px] text-[#8A8680]">
                {cat.items.length} varer
              </span>
              <span className="text-[#8A8680] text-[12px] ml-1">▼</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3.5 pt-0">
            <div className="flex flex-col gap-0">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-3 py-1.5 border-t border-[#f4f4f0] items-center"
                >
                  <span className="font-georgia text-[13px] text-[#2C2A27] flex-1">
                    {item.name}
                  </span>
                  <span className="font-dm-mono text-[11px] text-[#8A8680] text-right">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
