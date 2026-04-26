import { useState, type ReactNode } from "react";

interface BottleFlipProps {
  bottleSrc: string;
  bottleAlt: string;
  back: ReactNode;
}

// Notice the "default" keyword added right here!
export default function BottleFlip({ bottleSrc, bottleAlt, back }: BottleFlipProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="pill bg-teal px-3 py-1 text-[0.7rem] font-medium text-white">
        12g Protein
      </span>

      <div
        className="relative w-[180px] h-[255px] sm:w-[240px] sm:h-[340px]"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative h-full w-full transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-3xl"
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          >
            <img
              src={bottleSrc}
              alt={bottleAlt}
              className="h-full w-full object-contain"
              loading="lazy"
              width={240}
              height={340}
            />
          </div>
          <div
            className="absolute inset-0 overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_oklch(0_0_0/0.08)]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {back}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="rounded-full border border-teal bg-teal/10 px-3.5 py-1.5 text-[0.75rem] font-normal text-teal transition-all hover:bg-teal/15"
      >
        {flipped ? "Back to Bottle" : "Nutrition Facts"}
      </button>
    </div>
  );
}