import Link from "next/link";

export default function WhyHeatPumpsFail() {
  return (
    <article className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="text-blue-600 mb-8 inline-block hover:underline">← Back to Home</Link>
        <h1 className="text-4xl font-bold mb-6">Why Heat Pumps Fail: 8 Installation Mistakes</h1>
        <div className="space-y-6">
          <p className="text-xl text-gray-600">
            Most heat pump problems aren't equipment failures—they're installation mistakes.
          </p>
          <h2 className="text-2xl font-bold mt-8">1. Oversizing the System</h2>
          <p>Contractors match the old furnace BTU rating without doing load calculations, causing short-cycling.</p>
        </div>
      </div>
    </article>
  );
}
