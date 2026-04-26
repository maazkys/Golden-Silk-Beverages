import { useMemo } from "react";

type ParticleType = "mango" | "salt" | "cardamom";

interface FloatingParticlesProps {
  type: ParticleType;
  count?: number;
  className?: string;
}

function MangoSlice({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 2 C8 2 2 12 2 22 C2 34 10 38 20 38 C30 38 38 34 38 22 C38 12 32 2 20 2Z"
        fill="oklch(0.78 0.14 80)"
      />
      <ellipse cx="20" cy="24" rx="5" ry="8" fill="oklch(0.55 0.13 50)" opacity="0.55" />
    </svg>
  );
}

function SaltCrystal({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <polygon
        points="15,2 26,8 28,20 18,28 6,26 2,14 8,4"
        fill="oklch(0.72 0.06 45)"
      />
      <polygon points="15,2 26,8 15,15" fill="oklch(1 0 0)" opacity="0.25" />
    </svg>
  );
}

function CardamomPod({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 32" fill="none">
      <ellipse cx="10" cy="16" rx="8" ry="14" fill="oklch(0.70 0.07 145)" />
      <line x1="10" y1="4" x2="10" y2="28" stroke="oklch(0.50 0.08 145)" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

const SIZE_RANGE: Record<ParticleType, [number, number]> = {
  mango: [18, 52],
  salt: [10, 30],
  cardamom: [12, 26],
};

// Added "default" right here! The helper functions above stay exactly as they are.
export default function FloatingParticles({ type, count = 10, className = "" }: FloatingParticlesProps) {
  const particles = useMemo(() => {
    const [minSize, maxSize] = SIZE_RANGE[type];
    return Array.from({ length: count }).map((_, i) => {
      const seed = (i + 1) * 9301 + 49297;
      const r1 = ((seed * 233280) % 100) / 100;
      const r2 = ((seed * 13731) % 100) / 100;
      const r3 = ((seed * 71197) % 100) / 100;
      const r4 = ((seed * 49157) % 100) / 100;
      const r5 = ((seed * 98317) % 100) / 100;
      return {
        id: i,
        top: `${r1 * 80 + 10}%`,
        left: `${r2 * 90 + 5}%`,
        size: Math.round(minSize + r3 * (maxSize - minSize)),
        opacity: 0.10 + r5 * 0.18,
        delay: `${(r1 * 10).toFixed(2)}s`,
        duration: `${(8 + r4 * 8).toFixed(2)}s`,
      };
    });
  }, [type, count]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            top: p.top,
            left: p.left,
            opacity: p.opacity,
            animation: `float-drift ${p.duration} ease-in-out ${p.delay} infinite alternate`,
          }}
        >
          {type === "mango" && <MangoSlice size={p.size} />}
          {type === "salt" && <SaltCrystal size={p.size} />}
          {type === "cardamom" && <CardamomPod size={p.size} />}
        </div>
      ))}
    </div>
  );
}