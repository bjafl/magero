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
      className="bg-white rounded-2xl p-4 border border-[#e8e8e2] shadow-[0_1px_6px_rgba(0,0,0,0.04)] cursor-pointer transition-all duration-200 hover:shadow-[0_4px_16px_rgba(45,80,22,0.12)] hover:border-[#6B8F47]"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-fraunces font-bold text-base text-[#2D5016] m-0 flex-1">
          {recipe.name}
        </h3>
        <span className="font-dm-mono text-[11px] text-[#8A8680] whitespace-nowrap ml-2 mt-0.5">
          ⏱ {recipe.time}
        </span>
      </div>
      <p className="text-[12px] text-[#5a5a56] m-0 mb-2.5 leading-[1.5] font-georgia">
        {recipe.description}
      </p>
      <div className="flex gap-1 flex-wrap items-center">
        {recipe.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
        <span className="font-dm-mono text-[11px] text-[#8A8680] ml-auto">
          {recipe.servings} pers.
        </span>
      </div>
    </div>
  );
}
