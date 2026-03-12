export interface Recipe {
  id: number;
  name: string;
  time: string;
  servings: number;
  tags: string[];
  description: string;
  ingredients: Record<string, string[]>;
  steps: string[];
  tip?: string;
}

export interface DietRow {
  category: string;
  items: string[];
  icon: string;
  priority?: boolean;
}

export interface DietData {
  moreOf: DietRow[];
  lessOf: DietRow[];
}

export interface MacroBalance {
  label: string;
  value: number;
  color: string;
  desc: string;
}

export interface ProteinSource {
  name: string;
  score: number;
  tag: string;
  emoji: string;
}

export interface StapleItem {
  name: string;
  note: string;
}

export interface Staple {
  cat: string;
  color: string;
  items: StapleItem[];
}

export interface NutritionData {
  dietData: DietData;
  macroBalance: MacroBalance[];
  proteinSources: ProteinSource[];
  staples: Staple[];
}
