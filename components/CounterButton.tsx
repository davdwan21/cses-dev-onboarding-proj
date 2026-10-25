import type { Color } from "@/lib/counters";

const STYLES: Record<Color, string> = {
  red: "bg-red-500 hover:bg-red-600",
  green: "bg-green-500 hover:bg-green-600",
  blue: "bg-blue-500 hover:bg-blue-600",
};

type CounterButtonProps = {
  color: Color;
  count: number;
  onIncrement: (color: Color) => void;
};

export function CounterButton({ color, count, onIncrement }: CounterButtonProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-4xl font-semibold tabular-nums">{count}</span>
      <button
        type="button"
        onClick={() => onIncrement(color)}
        className={`rounded-full px-6 py-3 font-medium capitalize text-white transition-colors ${STYLES[color]}`}
      >
        {color}
      </button>
    </div>
  );
}
