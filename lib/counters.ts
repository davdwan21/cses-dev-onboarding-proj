export const COLORS = ["red", "green", "blue"] as const;

export type Color = (typeof COLORS)[number];

export type Counts = Record<Color, number>;

export function isColor(value: unknown): value is Color {
  return typeof value === "string" && (COLORS as readonly string[]).includes(value);
}
