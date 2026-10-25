"use client";

import { useEffect, useState } from "react";
import { CounterButton } from "@/components/CounterButton";
import type { Color, Counts } from "@/lib/counters";

export default function Home() {
  const [counts, setCounts] = useState<Counts>({ red: 0, green: 0, blue: 0 });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/counters")
      .then((res) => {
        if (!res.ok) throw new Error(`GET /api/counters failed (${res.status})`);
        return res.json();
      })
      .then(setCounts)
      .catch((err: Error) => setError(err.message));
  }, []);

  async function increment(color: Color) {
    const res = await fetch(`/api/counters/${color}`, { method: "POST" });
    if (!res.ok) {
      setError(`POST /api/counters/${color} failed (${res.status})`);
      return;
    }
    setError(null);
    setCounts(await res.json());
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-12 p-8">
      <h1 className="text-3xl font-semibold">Counters</h1>
      <div className="flex gap-10">
        <CounterButton color="red" count={counts.red} onIncrement={increment} />
        <CounterButton color="green" count={counts.green} onIncrement={increment} />
        <CounterButton color="blue" count={counts.blue} onIncrement={increment} />
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </main>
  );
}
