"use client";

import { TablesProvider, useTables } from "@/app/lib/tables-context";
import { ShopSection } from "@/app/components/shop-section";

function CalculatorContent() {
  const { tables, loading, error } = useTables();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <p className="text-slate-400">Loading calculator data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-24">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  if (!tables) return null;

  return (
    <div className="space-y-6">
      {tables.GOLD && <ShopSection shop={tables.GOLD} color="amber" />}
      {tables.SILVER && <ShopSection shop={tables.SILVER} color="slate" />}
      {tables.BRONZE && <ShopSection shop={tables.BRONZE} color="orange" />}
    </div>
  );
}

export default function Home() {
  return (
    <TablesProvider>
      <div className="relative min-h-screen text-white" style={{ backgroundColor: "#020617" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background.jpg')", filter: "brightness(0.4)" }}
        />
        <div className="relative mx-auto max-w-3xl px-4 py-10">
          <header className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
              SVS Store Calculator
            </p>
            <h1 className="mt-4 text-4xl font-bold text-white">
              SVS Store Calculator
            </h1>
            <p className="mt-2 text-slate-300">
              Toggle items and adjust quantities to plan your coin spending
            </p>
          </header>
          <CalculatorContent />
        </div>
      </div>
    </TablesProvider>
  );
}
