import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "15 Questions to Ask Heat Pump Contractors in Maryland | DMV Heat Pumps",
  description: "Essential questions for vetting heat pump installers in the DMV area. Learn what to ask about training, warranties, load calculations, and ZEHES compliance.",
  keywords: "heat pump contractor questions, Maryland HVAC, contractor vetting, heat pump installation, ZEHES contractors",
};

export default function ContractorQuestions() {
  return (
    <article className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="text-blue-600 mb-8 inline-block hover:underline">← Back to Home</Link>
        
        <h1 className="text-4xl font-bold mb-6">Questions Every Contractor Should Answer</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-xl text-gray-700">
            Before you sign a contract for heat pump installation, you need answers.
          </p>
          <p>Not marketing language. Not reassurances. <strong>Answers.</strong></p>
          <p>This article provides the specific questions that separate performance-driven contractors from equipment salespeople—and explains what the answers should sound like.</p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <p className="font-semibold mb-2">How to use this guide:</p>
            <p>Don't read this list to a contractor like a quiz. Ask 3-5 questions naturally during your conversation. Listen for substance vs deflection. Performance-first contractors will welcome these questions.</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Section 1: Building Assessment Questions</h2>
          
          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Q1: "Will you perform a blower door test before quoting?"</h3>
            <p className="font-semibold text-green-700 mb-2">✅ Good answers sound like:</p>
            <p>"Yes, we include a blower door test. It's the only way to know the actual infiltration rate for load calculations."</p>
            
            <p className="font-semibold text-red-700 mt-4 mb-2">❌ Red flag answers:</p>
            <p>"We don't need that for residential. We use industry standard infiltration rates."</p>
            <p className="text-sm mt-2 italic">Translation: "We're guessing."</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Q2: "How will you measure the conditioned space?"</h3>
            <p className="font-semibold text-green-700 mb-2">✅ Good answers:</p>
            <p>"We use LiDAR scanning to capture actual geometry—including ceiling heights, vaulted areas, and open staircases."</p>
            
            <p className="font-semibold text-red-700 mt-4 mb-2">❌ Red flags:</p>
            <p>"We use the square footage from your property records."</p>
            <p className="text-sm mt-2 italic">Translation: "We're using rough estimates that might miss 20-30% of actual volume."</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Q3: "Will you perform a Manual J load calculation?"</h3>
            <p className="font-semibold text-green-700 mb-2">✅ Good answers:</p>
            <p>"Yes, we perform a full Manual J using ACCA-approved software. We input your measured ACH50, actual window types, insulation levels, and duct conditions."</p>
            
            <p className="font-semibold text-red-700 mt-4 mb-2">❌ Red flags:</p>
            <p>"We use a simplified calculator based on square footage."</p>
            <p className="text-sm mt-2 italic">Translation: "We're not doing Manual J."</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Section 2: System Sizing Questions</h2>
          
          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Q4: "How does your recommended system size compare to my current equipment?"</h3>
            <p className="font-semibold text-green-700 mb-2">✅ Good answers:</p>
            <p>"Your current furnace is X tons. Based on your measured envelope and load calculation, we're recommending Y tons. Here's why..."</p>
            
            <p className="font-semibold text-red-700 mt-4 mb-2">❌ Red flags:</p>
            <p>"We're matching your old furnace size. That's what's always worked."</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Q5: "At what outdoor temperature will the backup electric heat turn on?"</h3>
            <p className="font-semibold text-green-700 mb-2">✅ Good answers:</p>
            <p>"We'll set the backup heat lockout at 25°F or lower. In most DMV winters, backup heat should rarely run."</p>
            
            <p className="font-semibold text-red-700 mt-4 mb-2">❌ Red flags:</p>
            <p>"Backup heat is automatic—it kicks in whenever needed."</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Section 3: Business Practice Questions</h2>
          
          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Q6: "Do you charge for the initial assessment?"</h3>
            <p className="font-semibold text-green-700 mb-2">✅ Good answers:</p>
            <p>"We charge $300-800 for a comprehensive assessment including blower door testing and load calculation. The fee is credited toward installation if you proceed."</p>
            
            <p className="font-semibold text-red-700 mt-4 mb-2">❌ Red flags:</p>
            <p>"All our estimates are free. We don't charge until we install."</p>
            <p className="text-sm mt-2 italic">Translation: "We rush through homes and size based on square footage."</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">Q7: "What warranty do you provide on installation work?"</h3>
            <p className="font-semibold text-green-700 mb-2">✅ Good answers:</p>
            <p>"We provide a 1-3 year labor warranty on our installation. That covers workmanship issues—ductwork, refrigerant connections, electrical, controls."</p>
            
            <p className="font-semibold text-red-700 mt-4 mb-2">❌ Red flags:</p>
            <p>"The manufacturer provides a 10-year warranty. That covers everything."</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Red Flags to Watch For</h2>
          
          <div className="space-y-6 my-8">
            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <p className="font-bold mb-2">🚩 Pressure to sign immediately</p>
              <p>"This price is only good if you sign today."</p>
              <p className="mt-2 font-semibold">What to do: Walk away. Quality contractors don't pressure.</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <p className="font-bold mb-2">🚩 Dismissing your research</p>
              <p>"You've been reading too much online. It's not that complicated."</p>
              <p className="mt-2 font-semibold">What to do: End the conversation. They're defensive because they don't do what you're asking about.</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <p className="font-bold mb-2">🚩 No interest in your building history</p>
              <p>Doesn't ask about weatherization, insulation upgrades, or comfort complaints.</p>
              <p className="mt-2 font-semibold">What to do: Choose someone who asks more questions than they answer initially.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Comparing Multiple Contractors</h2>
          
          <p>You should get at least 3 quotes. Create a simple comparison grid with these questions and note their answers.</p>
          
          <p className="font-semibold mt-4">What you'll likely see:</p>
          
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-bold mb-3">Contractor A (volume-focused)</p>
              <ul className="text-sm space-y-2">
                <li>• Free estimate</li>
                <li>• Sized by square footage</li>
                <li>• No testing</li>
                <li>• Lowest price</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="font-bold mb-3">Contractor B (mid-tier)</p>
              <ul className="text-sm space-y-2">
                <li>• Free estimate</li>
                <li>• Claims Manual J</li>
                <li>• Visual inspection</li>
                <li>• Mid-range price</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="font-bold mb-3">Contractor C (performance)</p>
              <ul className="text-sm space-y-2">
                <li>• Paid assessment</li>
                <li>• Blower door + Manual J</li>
                <li>• Post-install verification</li>
                <li>• Higher upfront, better outcome</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg my-12">
            <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-lg mb-4">Not every contractor will answer these questions well. That's the point.</p>
            <p className="text-lg mb-4">These questions separate contractors who measure, size accurately, verify work, and stand behind results from those who guess, oversell, install and leave, and blame failures on technology.</p>
            <p className="text-xl font-bold">The right contractor will welcome these questions. The wrong contractor will dodge, deflect, or get defensive.</p>
            <p className="text-xl font-bold mt-4">Trust the signal.</p>
          </div>

          <div className="border-t-2 pt-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link href="/articles/heat-pump-ready" className="block text-blue-600 hover:underline text-lg">
                → What "Heat Pump Ready" Actually Means
              </Link>
              <Link href="/articles/why-heat-pumps-fail" className="block text-blue-600 hover:underline text-lg">
                → Why Heat Pumps Fail (And Who Pays for It)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
