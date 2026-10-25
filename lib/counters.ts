export const COLORS = ["red", "green", "blue"] as const;

export type Color = (typeof COLORS)[number];

export type Counts = Record<Color, number>;
