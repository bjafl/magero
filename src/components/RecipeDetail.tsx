import { useState } from "react"
import type { Recipe } from "@/types"
import { Tag } from "./Tag"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RecipeDetailProps {
  recipe: Recipe | null
  onClose: () => void
}

export function RecipeDetail({ recipe, onClose }: RecipeDetailProps) {
  const [activeTab, setActiveTab] = useState("ingredients")

  return (
    <Sheet open={!!recipe} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="mx-auto flex max-h-[90vh] max-w-150 flex-col gap-0 rounded-t-3xl border-0 bg-[#FAFAF7] p-0"
      >
        {recipe && (
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex flex-1 flex-col overflow-hidden"
          >
            {/* Header */}
            <SheetHeader className="shrink-0 gap-0 bg-[#FAFAF7] px-5 pt-5 pb-0">
              <div className="mb-2 flex items-start justify-between">
                <SheetTitle className="flex-1 text-left font-fraunces text-[22px] leading-tight font-extrabold text-[#2D5016]">
                  {recipe.name}
                </SheetTitle>
                <button
                  onClick={onClose}
                  className="ml-2 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-none bg-[#e8e8e2] text-base"
                >
                  ✕
                </button>
              </div>
              <div className="mb-3 flex gap-3">
                <span className="font-dm-mono text-[12px] text-[#6B8F47]">
                  ⏱ {recipe.time}
                </span>
                <span className="font-dm-mono text-[12px] text-[#6B8F47]">
                  👥 {recipe.servings} pers.
                </span>
              </div>
              <div className="mb-3 flex flex-wrap gap-1">
                {recipe.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              <TabsList className="h-auto w-full justify-start gap-0 rounded-none border-b-2 border-[#e8e8e2] bg-transparent p-0">
                <TabsTrigger
                  value="ingredients"
                  className="-mb-0.5 rounded-none border-b-2 bg-transparent px-4 py-2 font-fraunces text-[14px] font-semibold shadow-none data-[state=active]:border-[#2D5016] data-[state=active]:text-[#2D5016] data-[state=inactive]:border-transparent data-[state=inactive]:text-[#8A8680]"
                >
                  Ingredienser
                </TabsTrigger>
                <TabsTrigger
                  value="steps"
                  className="-mb-0.5 rounded-none border-b-2 bg-transparent px-4 py-2 font-fraunces text-[14px] font-semibold shadow-none data-[state=active]:border-[#2D5016] data-[state=active]:text-[#2D5016] data-[state=inactive]:border-transparent data-[state=inactive]:text-[#8A8680]"
                >
                  Fremgangsmåte
                </TabsTrigger>
              </TabsList>
            </SheetHeader>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-5 pt-4 pb-6">
              <TabsContent value="ingredients" className="mt-0">
                <div className="flex flex-col gap-4">
                  {Object.entries(recipe.ingredients).map(([group, items]) => (
                    <div key={group}>
                      <h4 className="mb-2 font-fraunces text-[13px] font-bold tracking-wide text-[#6B8F47] uppercase">
                        {group}
                      </h4>
                      <div className="flex flex-col gap-1">
                        {items.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 border-b border-[#f0f0ea] py-1.5"
                          >
                            <span className="mt-0.5 shrink-0 text-[12px] text-[#6B8F47]">
                              •
                            </span>
                            <span className="font-georgia text-[14px] text-[#2C2A27]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="steps" className="mt-0">
                <div className="flex flex-col gap-2.5">
                  {recipe.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-[#2D5016] font-dm-mono text-[11px] font-bold text-white">
                        {i + 1}
                      </div>
                      <p className="m-0 pt-0.75 font-georgia text-[14px] leading-relaxed text-[#2C2A27]">
                        {step}
                      </p>
                    </div>
                  ))}
                  {recipe.tip && (
                    <div className="mt-2 flex gap-2.5 rounded-xl border border-[#f0d880] bg-[#fef9ec] p-3">
                      <span className="text-base">💡</span>
                      <p className="m-0 font-georgia text-[13px] leading-relaxed text-[#7a6010] italic">
                        {recipe.tip}
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        )}
      </SheetContent>
    </Sheet>
  )
}
