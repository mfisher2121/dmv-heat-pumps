import Link from "next/link";

export default function ContractorQuestions() {
  return (
    <article className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="text-blue-600 mb-8 inline-block hover:underline">← Back to Home</Link>
        <h1 className="text-4xl font-bold mb-6">15 Questions to Ask Heat Pump Contractors</h1>
        <div className="space-y-6">
          <p className="text-xl text-gray-600">
            Not all HVAC contractors understand heat pump technology. Use these questions to separate qualified installers.
          </p>
          <h2 className="text-2xl font-bold mt-8">1. What manufacturer-specific training have you completed?</h2>
          <p>Cold-climate heat pumps require specialized training. Generic HVAC certification isn't enough.</p>
        </div>
      </div>
    </article>
  );
}
