import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Maryland's Heat Pump Transition Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert guidance for homeowners navigating the ZEHES mandate, heat pump technology, and electrification rebates in the DMV area.
            </p>
            <Link 
              href="/articles/heat-pump-ready" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg"
            >
              Read Our Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-3">180,000</div>
              <div className="text-gray-700 font-medium">Homes Required to Convert by 2029</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-3">$14,000+</div>
              <div className="text-gray-700 font-medium">Available in Federal & State Rebates</div>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl font-bold text-blue-600 mb-3">3-5 Years</div>
              <div className="text-gray-700 font-medium">Average Heat Pump ROI Period</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Understanding Heat Pumps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/articles/heat-pump-ready" className="block bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Is Your Home Heat Pump Ready?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete readiness checklist covering electrical, insulation, and permit requirements.
              </p>
              <span className="text-blue-600 font-bold text-lg">Read More →</span>
            </Link>
            
            <Link href="/articles/questions-for-contractors" className="block bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">15 Questions to Ask Contractors</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vet heat pump installers with these essential qualification questions.
              </p>
              <span className="text-blue-600 font-bold text-lg">Read More →</span>
            </Link>
            
            <Link href="/articles/why-heat-pumps-fail" className="block bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Heat Pumps Fail</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                8 installation mistakes that cause problems and how to avoid them.
              </p>
              <span className="text-blue-600 font-bold text-lg">Read More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get expert guidance on heat pump installation in Maryland.
          </p>
        </div>
      </section>
    </div>
  );
}
