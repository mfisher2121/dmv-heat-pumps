import Link from "next/link";

export default function HeatPumpReady() {
  return (
    <article className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="text-blue-600 mb-8 inline-block hover:underline">← Back to Home</Link>
        <h1 className="text-4xl font-bold mb-6">Is Your Home Heat Pump Ready?</h1>
        <div className="space-y-6">
          <p className="text-xl text-gray-600">
            Before installing a heat pump in Maryland, verify your home can support one. Here's your complete readiness checklist.
          </p>
          <h2 className="text-2xl font-bold mt-8">1. Electrical Service Capacity</h2>
          <p>Most Maryland homes built before 2000 have 100-amp electrical service. Modern heat pumps often require 200-amp service.</p>
          <h2 className="text-2xl font-bold mt-8">2. Home Insulation Assessment</h2>
          <p>Heat pumps work best in well-insulated homes. Poor insulation forces your heat pump to work harder.</p>
        </div>
      </div>
    </article>
  );
}
