"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CounterButton } from "@/components/CounterButton";
import type { Color, Counts } from "@/lib/counters";

export default function Home() {
  const [counts, setCounts] = useState<Counts>({ red: 0, green: 0, blue: 0 });
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => setUsername(data.username));
  }, []);

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

  async function signOut() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
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
      {username && (
        <p className="text-sm text-zinc-500">
          Signed in as <strong>{username}</strong> ·{" "}
          <button type="button" onClick={signOut} className="underline">
            Sign out
          </button>
        </p>
      )}
    </main>
  );
}
