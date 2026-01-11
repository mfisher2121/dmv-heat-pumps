import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Maryland's Heat Pump Transition Starts Here
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Expert guidance for homeowners navigating the ZEHES mandate, heat pump technology, and electrification rebates in the DMV area.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/articles" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Read Our Guides
              </Link>
              <Link 
                href="/resources" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Find Rebates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">180,000</div>
              <div className="text-gray-600">Homes Required to Convert by 2029</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$14,000+</div>
              <div className="text-gray-600">Available in Federal & State Rebates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3-5 Years</div>
              <div className="text-gray-600">Average Heat Pump ROI Period</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Understanding Heat Pumps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/articles/zehes-mandate-explained" className="block border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Maryland's ZEHES Mandate Explained</h3>
              <p className="text-gray-600 mb-4">
                What you need to know about the 180,000-home electrification requirement and how it affects you.
              </p>
              <span className="text-blue-600 font-semibold">Read More →</span>
            </Link>
            
            <Link href="/articles/heat-pump-basics" className="block border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Heat Pump Basics for DMV Homeowners</h3>
              <p className="text-gray-600 mb-4">
                How heat pumps work, why they're efficient, and what makes them suitable for Maryland's climate.
              </p>
              <span className="text-blue-600 font-semibold">Read More →</span>
            </Link>
            
            <Link href="/articles/rebates-incentives" className="block border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Complete Guide to Heat Pump Rebates</h3>
              <p className="text-gray-600 mb-4">
                Stack federal tax credits with Maryland rebates to save $10,000+ on your heat pump installation.
              </p>
              <span className="text-blue-600 font-semibold">Read More →</span>
            </Link>
            
            <Link href="/articles/contractor-selection" className="block border rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">How to Choose a Heat Pump Contractor</h3>
              <p className="text-gray-600 mb-4">
                What to look for in installers, red flags to avoid, and questions to ask before signing.
              </p>
              <span className="text-blue-600 font-semibold">Read More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get our complete guide to heat pump installation in Maryland, including rebate calculators and contractor checklists.
          </p>
          <Link 
            href="/resources" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Access Free Resources
          </Link>
        </div>
      </section>
    </div>
  );
}
