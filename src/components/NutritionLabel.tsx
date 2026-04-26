interface NutritionLabelProps {
  calories: number;
  totalFat: string;
  satFat: string;
  cholesterol: string;
  totalCarbs: string;
  fiber: string;
  sugars: string;
  protein: string;
  fatPct: string;
  satPct: string;
  cholPct: string;
  carbPct: string;
  fiberPct: string;
  proteinPct: string;
}

// Added the "default" keyword here!
export default function NutritionLabel(props: NutritionLabelProps) {
  return (
    <div className="flex h-full w-full flex-col bg-white p-[14px] text-charcoal">
      <div className="font-display text-[0.85rem] font-bold leading-tight">Nutrition Facts</div>
      <div className="text-[0.62rem] font-light text-gray-mid">Per 12 fl oz (354mL)</div>
      <div className="my-[6px] h-px bg-gray-light" />

      <Row label="Calories" value={String(props.calories)} bold />
      <div className="my-[6px] h-px bg-gray-light" />

      <Row label="Total Fat" value={props.totalFat} pct={props.fatPct} />
      <Row label="Sat. Fat" value={props.satFat} pct={props.satPct} indent />
      <Row label="Cholesterol" value={props.cholesterol} pct={props.cholPct} />
      <Row label="Total Carbs" value={props.totalCarbs} pct={props.carbPct} />
      <Row label="Dietary Fiber" value={props.fiber} pct={props.fiberPct} indent />
      <Row label="Total Sugars" value={props.sugars} indent />
      <Row label="Protein" value={props.protein} pct={props.proteinPct} bold />

      <div className="my-[6px] h-px bg-gray-light" />
      <div className="text-[0.62rem] font-normal">Contains: Milk</div>
      <div className="my-[6px] h-px bg-gray-light" />
      <div className="text-[0.62rem] font-light text-gray-mid leading-snug">
        Gluten-Free
        <br />
        No Preservatives
        <br />
        No Artificial Flavors
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  pct,
  indent,
  bold,
}: {
  label: string;
  value: string;
  pct?: string;
  indent?: boolean;
  bold?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between py-[2px] text-[0.65rem] ${
        bold ? "font-medium" : "font-light"
      } ${indent ? "pl-2 text-gray-mid" : ""}`}
    >
      <span>{label}</span>
      <span className="flex items-baseline gap-2">
        <span>{value}</span>
        {pct ? <span className="w-7 text-right text-gray-mid">{pct}</span> : null}
      </span>
    </div>
  );
}