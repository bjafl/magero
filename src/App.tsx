import { useState } from "react"
import {
  LayoutGrid,
  Dumbbell,
  BookOpen,
  ShoppingBasket,
  type LucideIcon,
} from "lucide-react"

import type { Recipe } from "@/types"
import nutritionData from "@/data/nutrition.json"
import recipesJson from "@/data/recipes.json"

import { MacroDonut } from "@/components/MacroDonut"
import { DietTable } from "@/components/DietTable"
import { ProteinCard } from "@/components/ProteinCard"
import { RecipeCard } from "@/components/RecipeCard"
import { RecipeDetail } from "@/components/RecipeDetail"
import { StaplesView } from "@/components/StaplesView"
import { ThemeToggle } from "@/components/ThemeToggle"

const { macroBalance, proteinSources, dietData, staples } = nutritionData
const recipes = recipesJson as unknown as Recipe[]

const tabs: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "oversikt", label: "Oversikt", icon: LayoutGrid },
  { id: "protein", label: "Protein", icon: Dumbbell },
  { id: "oppskrifter", label: "Oppskrifter", icon: BookOpen },
  { id: "staples", label: "Staples", icon: ShoppingBasket },
]

type TabId = "oversikt" | "protein" | "oppskrifter" | "staples"

export default function App() {
  const [tab, setTab] = useState<TabId>("oversikt")
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [recipeFilter, setRecipeFilter] = useState("alle")

  const allTags = [
    "alle",
    ...Array.from(new Set(recipes.flatMap((r) => r.tags))),
  ]
  const filteredRecipes =
    recipeFilter === "alle"
      ? recipes
      : recipes.filter((r) => r.tags.includes(recipeFilter))

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-150" style={{ paddingBottom: "calc(5rem + env(safe-area-inset-bottom))" }}>
        {/* Header */}
        <div className="sticky top-0 z-50 bg-[#2D5016] px-5 pb-5" style={{ paddingTop: "max(1.5rem, env(safe-area-inset-top))" }}>
          <div className="mb-1 flex items-center gap-2.5">
            <h1 className="m-0 flex-1 font-fraunces text-2xl font-extrabold text-[#F2F0EB]">
              Kostholdsguide
            </h1>
            <ThemeToggle />
          </div>
          <span className="font-dm-mono text-[11px] text-[#C8DDB5]">
            retning, ikke regler
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* ── OVERSIKT ── */}
          {tab === "oversikt" && (
            <div className="flex flex-col gap-4">
              {/* Hero card */}
              <div
                className="rounded-[20px] p-5 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #2D5016 0%, #4a7c2f 100%)",
                }}
              >
                <div className="mb-1 font-dm-mono text-[10px] tracking-widest text-[#C8DDB5] uppercase">
                  Kjerneprinsipper
                </div>
                <h2 className="m-0 mb-3.5 font-fraunces text-[20px] leading-tight font-extrabold">
                  Protein, lav-GI
                  <br />
                  og gode fettsyrer
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Metthet ↑", "Blodsukker ↔", "Omega-3 ↑", "Fiber ↑"].map(
                    (k) => (
                      <span
                        key={k}
                        className="rounded-full bg-white/15 px-2.5 py-1 font-dm-mono text-[11px]"
                      >
                        {k}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Macro donut + key items */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="mb-3 font-fraunces text-[13px] font-bold text-primary">
                    Makrobalanse
                  </div>
                  <MacroDonut macroBalance={macroBalance} />
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: "🐟", label: "Fet fisk", sub: "2–3x/uke" },
                    { icon: "🌾", label: "Byggryn", sub: "Beste lav-GI" },
                    {
                      icon: "🥦",
                      label: "Grønnsaker",
                      sub: "Jo mer jo bedre",
                    },
                    {
                      icon: "🫘",
                      label: "Belgfrukter",
                      sub: "Fiber + protein",
                    },
                  ].map((k) => (
                    <div
                      key={k.label}
                      className="flex items-center gap-2 rounded-xl border border-border bg-card p-2.5"
                    >
                      <span className="text-lg">{k.icon}</span>
                      <div>
                        <div className="font-fraunces text-[12px] font-semibold text-primary">
                          {k.label}
                        </div>
                        <div className="font-dm-mono text-[10px] text-muted-foreground">
                          {k.sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diet table */}
              <DietTable dietData={dietData} />

              {/* Smart swaps */}
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="mb-3 font-fraunces text-[14px] font-bold text-primary">
                  Enkle bytter som monner
                </div>
                {[
                  ["Hvit ris", "Basmatiris eller byggryn"],
                  ["Ramen-nudler", "Soba (bokhvete)"],
                  ["Hvit pasta", "Fullkornspasta"],
                  ["Vanlig potet", "Søtpotet eller sellerirot"],
                  ["Fet pålegg", "Makrell i tomat / avokado"],
                ].map(([from, to]) => (
                  <div
                    key={from}
                    className="flex items-center gap-2.5 border-b border-divider py-2"
                  >
                    <span className="flex-1 font-georgia text-[13px] text-warm-subtext">
                      {from}
                    </span>
                    <span className="text-[14px] text-ring">→</span>
                    <span className="flex-1 text-right font-georgia text-[13px] text-primary">
                      {to}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── PROTEIN ── */}
          {tab === "protein" && (
            <div className="flex flex-col gap-4">
              {/* Hero */}
              <div className="rounded-[20px] bg-[#2D5016] p-5">
                <div className="mb-1 font-dm-mono text-[10px] tracking-widest text-[#C8DDB5] uppercase">
                  Kjerneprioritet
                </div>
                <h2 className="m-0 mb-2 font-fraunces text-[22px] font-extrabold text-white">
                  Protein i fokus
                </h2>
                <p className="m-0 font-georgia text-[13px] leading-relaxed text-[#C8DDB5]">
                  Tilstrekkelig protein gir metthet, stabiliserer blodsukker og
                  bevarer muskelmasse. Prioriter magre og omega-3-rike kilder.
                </p>
              </div>

              {/* Protein scores */}
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="mb-3 font-fraunces text-[14px] font-bold text-primary">
                  Anbefalte proteinkilder
                </div>
                <div className="flex flex-col gap-2">
                  {[...proteinSources]
                    .sort((a, b) => b.score - a.score)
                    .map((s) => (
                      <ProteinCard key={s.name} source={s} />
                    ))}
                </div>
              </div>

              {/* Protein timing */}
              <div className="rounded-2xl border border-border bg-card p-4">
                <div className="mb-3 font-fraunces text-[14px] font-bold text-primary">
                  Protein gjennom dagen
                </div>
                {[
                  {
                    meal: "Frokost",
                    icon: "🌅",
                    protein: "Egg · cottage cheese · skyr",
                    examples: "Cottage cheese-pannekaker, havregrøt med skyr",
                  },
                  {
                    meal: "Lunsj",
                    icon: "☀️",
                    protein: "Kyllingskinke · makrell · hvitost",
                    examples: "Rugbrød med makrell i tomat, kyllingskinke",
                  },
                  {
                    meal: "Middag",
                    icon: "🌙",
                    protein: "Laks · kylling · tofu · linser",
                    examples: "Teriyaki laks, Kung Pao, Kikertgryte",
                  },
                  {
                    meal: "Snacks",
                    icon: "🌿",
                    protein: "Nøtter · egg · yoghurt",
                    examples: "Valnøtter, hardkokt egg, gresk yoghurt",
                  },
                ].map((item) => (
                  <div
                    key={item.meal}
                    className="border-b border-divider py-2.5"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-lg leading-[1.3]">{item.icon}</span>
                      <div>
                        <div className="mb-0.5 flex items-center gap-2">
                          <span className="font-fraunces text-[14px] font-bold text-primary">
                            {item.meal}
                          </span>
                        </div>
                        <span className="mb-0.5 block font-dm-mono text-[11px] text-ring">
                          {item.protein}
                        </span>
                        <span className="font-georgia text-[12px] text-muted-foreground italic">
                          {item.examples}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Omega-3 highlight */}
              <div
                className="rounded-2xl border border-[#b8d8f0] p-4"
                style={{
                  background:
                    "linear-gradient(135deg, #e8f4ff 0%, #d4eaf8 100%)",
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-[28px]">🐟</span>
                  <div>
                    <div className="mb-1 font-fraunces text-[15px] font-bold text-[#1a4a6e]">
                      Omega-3 prioritet
                    </div>
                    <p className="m-0 font-georgia text-[13px] leading-relaxed text-[#2a5a7e]">
                      Fet fisk 2–3 ganger i uken er en av de mest virkningsfulle
                      vanene. Laks, makrell og sild gir omega-3, D-vitamin og
                      høykvalitetsprotein i én pakke.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── OPPSKRIFTER ── */}
          {tab === "oppskrifter" && (
            <div className="flex flex-col gap-3">
              {/* Filter */}
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setRecipeFilter(tag)}
                    className={`cursor-pointer rounded-full border px-3 py-1.5 font-dm-mono text-[11px] whitespace-nowrap transition-all duration-150 ${
                      recipeFilter === tag
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="font-dm-mono text-[11px] text-muted-foreground">
                {filteredRecipes.length} oppskrifter
              </div>
              {filteredRecipes.map((r) => (
                <RecipeCard
                  key={r.id}
                  recipe={r as Recipe}
                  onClick={() => setSelectedRecipe(r as Recipe)}
                />
              ))}
            </div>
          )}

          {/* ── STAPLES ── */}
          {tab === "staples" && (
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl bg-[#2D5016] p-4">
                <h2 className="m-0 mb-1 font-fraunces text-[18px] font-extrabold text-white">
                  Fast lager
                </h2>
                <p className="m-0 font-dm-mono text-[12px] text-[#C8DDB5]">
                  Med disse varene på lager kan du alltid lage et sunt og
                  mettende måltid.
                </p>
              </div>
              <StaplesView staples={staples} />
            </div>
          )}
        </div>
      </div>

      {/* Bottom navigation */}
      <div
        className="fixed bottom-0 left-1/2 z-60 w-full max-w-150 -translate-x-1/2 border-t px-4 pt-2 backdrop-blur-md"
        style={{
          background: "var(--nav-bg)",
          borderColor: "var(--nav-border)",
          paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="flex justify-around">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as TabId)}
              className="flex cursor-pointer flex-col items-center gap-0.75 border-none bg-transparent px-3 py-1.5 transition-all duration-150"
            >
              <t.icon
                size={20}
                className="transition-all duration-150"
                style={{
                  opacity: tab === t.id ? 1 : 0.4,
                  color: tab === t.id ? "var(--primary)" : "var(--muted-foreground)",
                }}
              />
              <span
                className="font-dm-mono text-[10px]"
                style={{
                  color: tab === t.id ? "var(--primary)" : "var(--muted-foreground)",
                  fontWeight: tab === t.id ? 600 : 400,
                }}
              >
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recipe detail sheet */}
      <RecipeDetail
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  )
}
