import type { Recipe } from "@/types";
import { Tag } from "./Tag";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-card rounded-2xl p-4 border border-border shadow-[0_1px_6px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-200 hover:shadow-[0_4px_16px_rgba(45,80,22,0.12)] hover:border-ring"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-fraunces font-bold text-base text-primary m-0 flex-1">
          {recipe.name}
        </h3>
        <span className="font-dm-mono text-[11px] text-muted-foreground whitespace-nowrap ml-2 mt-0.5">
          ⏱ {recipe.time}
        </span>
      </div>
      <p className="text-[12px] text-foreground/70 m-0 mb-2.5 leading-normal font-georgia">
        {recipe.description}
      </p>
      <div className="flex gap-1 flex-wrap items-center">
        {recipe.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
        <span className="font-dm-mono text-[11px] text-muted-foreground ml-auto">
          {recipe.servings} pers.
        </span>
      </div>
    </div>
  );
}
