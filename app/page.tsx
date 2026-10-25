"use client";

import { useState } from "react";
import { CounterButton } from "@/components/CounterButton";
import type { Color, Counts } from "@/lib/counters";

export default function Home() {
  const [counts, setCounts] = useState<Counts>({ red: 0, green: 0, blue: 0 });

  function increment(color: Color) {
    setCounts((prev) => ({ ...prev, [color]: prev[color] + 1 }));
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-12 p-8">
      <h1 className="text-3xl font-semibold">Counters</h1>
      <div className="flex gap-10">
        <CounterButton color="red" count={counts.red} onIncrement={increment} />
        <CounterButton color="red" count={counts.green} onIncrement={increment} />
        <CounterButton color="blue" count={counts.blue} onIncrement={() => increment} />
      </div>
    </main>
  );
}
