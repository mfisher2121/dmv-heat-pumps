import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Heat Pumps Fail in Maryland: 8 Installation Mistakes | DMV Heat Pumps",
  description: "Common heat pump failure modes in Maryland, DC, and Virginia. Learn why most problems are building issues, not equipment failures.",
  keywords: "heat pump problems, Maryland HVAC, installation mistakes, ZEHES conversions, DMV heat pumps",
};

export default function WhyHeatPumpsFail() {
  return (
    <article className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="text-blue-600 mb-8 inline-block hover:underline">← Back to Home</Link>
        
        <h1 className="text-4xl font-bold mb-6">Why Heat Pumps Fail (And Who Pays for It)</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-xl text-gray-700">
            Heat pump failures in the DMV follow predictable patterns.
          </p>
          <p>Equipment rarely breaks. Performance just disappoints.</p>
          <p>And when it does, the blame usually lands on the technology—when the real problem started before installation.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The DMV Context: Why Failures Are Increasing</h2>
          
          <p className="font-semibold">The numbers tell the story:</p>
          <p>Maryland's ZEHES mandate requires 180,000 oil and propane conversions by 2029. That's roughly 45,000 conversions per year starting now.</p>
          
          <p className="mt-4">In 2024, Maryland installed approximately 12,000 heat pumps (residential, all types).</p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <p className="font-semibold mb-2">The math is brutal:</p>
            <ul className="space-y-1">
              <li>• Current capacity: ~12,000/year</li>
              <li>• Required capacity: ~45,000/year</li>
              <li>• Gap: 3-4x current installation volume</li>
            </ul>
          </div>

          <p className="font-semibold">What happens when markets move this fast:</p>
          <ul className="list-disc ml-8 space-y-2">
            <li>Contractors rush to meet demand</li>
            <li>Training lags behind volume</li>
            <li>Free estimates compress diagnostic time</li>
            <li>Measurement gets skipped</li>
            <li>Problems show up after installation</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Failure Mode 1: System Can't Keep Up in Cold Weather</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">What homeowners experience:</p>
            <p>"The heat pump works fine until it gets below 30°F. Then the house gets cold and the electric bill spikes."</p>
            
            <p className="font-semibold mt-4 mb-2">Common in:</p>
            <ul className="space-y-1 text-sm">
              <li>• Montgomery County colonials with attics</li>
              <li>• DC rowhouses (especially 3-story)</li>
              <li>• Baltimore-area homes built pre-1980</li>
              <li>• Prince George's County split-levels</li>
            </ul>
          </div>

          <p className="text-lg font-semibold mt-8">What's actually happening:</p>
          <p>The house is losing heat faster than the heat pump can replace it. This isn't a heat pump problem. It's an envelope problem.</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">The physics in DMV homes</h3>
          <p>Stack effect (warm air escaping through the top of the house) is especially severe in multi-story homes with uninsulated attics.</p>
          
          <p className="mt-4">In a typical 3-story DC rowhouse:</p>
          <ul className="list-disc ml-8 space-y-1">
            <li>Basement: comfortable</li>
            <li>First floor: comfortable</li>
            <li>Second floor: borderline</li>
            <li>Third floor: cold</li>
          </ul>
          
          <p className="mt-4">Why? Warm air rises and escapes through attic penetrations. The heat pump keeps trying to replace it. The top floor never catches up.</p>

          <div className="border-l-4 border-red-600 pl-6 my-8">
            <p className="font-semibold mb-2">Who pays:</p>
            <p><strong>Homeowner:</strong> Higher electric bills all winter, discomfort on coldest days, lost trust in electrification</p>
            <p className="mt-2"><strong>Contractor:</strong> Callback visits, warranty claims, reputation damage</p>
            <p className="mt-2"><strong>The industry:</strong> "Heat pumps don't work in Maryland"</p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">How to prevent this:</h3>
          <ul className="list-disc ml-8 space-y-2">
            <li><strong>Blower door test</strong> - measure actual air leakage</li>
            <li><strong>Manual J calculation</strong> - size for measured envelope, not assumptions</li>
            <li><strong>Identify major leaks</strong> - especially attic bypasses, top plates, rim joists</li>
            <li><strong>Address envelope first</strong> or account for it in sizing</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Failure Mode 2: System Short-Cycles</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold mb-3">What homeowners experience:</p>
            <p>"The heat pump turns on and off constantly. It never runs for more than 10 minutes."</p>
          </div>

          <p className="font-semibold mt-6">What's actually happening:</p>
          <p>The system is oversized for the actual load. It heats or cools the space too quickly, shuts off before dehumidifying, then cycles back on.</p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Why oversizing happens (especially during ZEHES rush)</h3>
          <p>Old sizing methods:</p>
          <ul className="list-disc ml-8 space-y-2">
            <li>"Match the old furnace" - but the old furnace was often oversized too</li>
            <li>"Square footage rule" - doesn't account for envelope quality</li>
            <li>"Add 20% to be safe" - creates short-cycling instead of safety</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="font-semibold mb-2">The humidity problem (critical in DMV)</p>
            <p>The Mid-Atlantic has long, humid shoulder seasons: April-May and September-October often see 60-85% outdoor humidity.</p>
            <p className="mt-4">An oversized heat pump:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Reaches temperature setpoint quickly</li>
              <li>Shuts off before removing humidity</li>
              <li>Indoor humidity stays 60-70%</li>
              <li>House feels clammy even at 72°F</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Failure Mode 3: High Operating Costs</h2>
          
          <p>High operating costs usually result from a combination of failures above:</p>
          <ul className="list-disc ml-8 space-y-2">
            <li>House leaks heat → system runs constantly</li>
            <li>Ducts leak air → wasted energy</li>
            <li>System is oversized → cycles inefficiently</li>
            <li>Backup heat runs often → electric resistance is expensive</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">The oil-to-electric cost shock</h3>
          
          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-bold mb-2">Oil heating (old)</p>
              <p className="text-sm">Cost per therm: ~$2.50-3.50</p>
            </div>
            <div className="bg-red-50 p-4 rounded">
              <p className="font-bold mb-2">Electric backup</p>
              <p className="text-sm">Cost per therm: ~$4.50-6.00</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="font-bold mb-2">Heat pump (efficient)</p>
              <p className="text-sm">Cost per therm: ~$1.50-2.50</p>
            </div>
          </div>

          <p>If the heat pump struggles and backup heat runs frequently, you're paying electric resistance rates, not heat pump rates.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Pattern Across All Failure Modes</h2>
          
          <p className="text-xl font-semibold">The common thread:</p>
          <p>Every failure mode traces back to decisions made before installation:</p>
          
          <ul className="space-y-2 my-6 text-lg">
            <li>✅ Was the building measured?</li>
            <li>✅ Was leakage addressed?</li>
            <li>✅ Were ducts tested?</li>
            <li>✅ Was the system sized from data?</li>
            <li>✅ Was anything verified?</li>
          </ul>

          <p className="font-semibold text-lg">When the answer is "no," failures are predictable.</p>

          <div className="bg-blue-600 text-white p-8 rounded-lg my-12">
            <h3 className="text-2xl font-bold mb-4">What Actually Prevents Failures</h3>
            <p className="text-lg mb-4">Three non-negotiable practices:</p>
            <ol className="space-y-3 text-lg">
              <li><strong>1. Measure before quoting</strong> - Blower door test, duct leakage test, real volume</li>
              <li><strong>2. Right-size based on reality</strong> - Manual J with measured inputs, account for stack effect</li>
              <li><strong>3. Verify after installation</strong> - Airflow to each room, backup heat settings, actual usage</li>
            </ol>
            <p className="mt-6 font-semibold">These aren't experimental. They're standard practice in high-performance HVAC.</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">The ZEHES Timeline Reality</h2>
          
          <p className="font-semibold">Two possible futures:</p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border-2 border-red-600 p-6 rounded-lg">
              <p className="font-bold text-red-600 mb-3">Path 1: Volume without verification</p>
              <ul className="space-y-2 text-sm">
                <li>• Contractors rush to meet demand</li>
                <li>• Testing is skipped</li>
                <li>• Failures multiply by 2026-2027</li>
                <li>• Media covers "heat pump problems"</li>
                <li>• Slower, more expensive transition</li>
              </ul>
            </div>
            
            <div className="border-2 border-green-600 p-6 rounded-lg">
              <p className="font-bold text-green-600 mb-3">Path 2: Measured, phased adoption</p>
              <ul className="space-y-2 text-sm">
                <li>• Verification becomes standard</li>
                <li>• Paid diagnostics replace free estimates</li>
                <li>• Failures remain low</li>
                <li>• Trust builds</li>
                <li>• ZEHES deadlines are met</li>
              </ul>
            </div>
          </div>

          <p className="text-lg mt-6">Maryland is currently on Path 1. The homeowners who insist on measurement shift their own outcomes toward Path 2.</p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Bottom Line</h2>
          
          <p className="text-xl">Heat pumps don't fail because the technology is flawed.</p>
          <p className="text-xl mt-4">They fail because buildings weren't measured, leaks weren't addressed, ducts weren't tested, and systems weren't sized correctly.</p>
          <p className="text-xl font-bold mt-4">In every case, the failure was preventable. And in every case, prevention was cheaper than the failure.</p>

          <div className="border-t-2 pt-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link href="/articles/heat-pump-ready" className="block text-blue-600 hover:underline text-lg">
                → What "Heat Pump Ready" Actually Means
              </Link>
              <Link href="/articles/questions-for-contractors" className="block text-blue-600 hover:underline text-lg">
                → Questions Every Contractor Should Answer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
