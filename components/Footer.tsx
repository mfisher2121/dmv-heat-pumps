import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">DMV Heat Pumps</h3>
            <p className="text-gray-400">Expert guidance for Maryland homeowners navigating heat pump installation and the ZEHES mandate.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Articles</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/articles/heat-pump-ready" className="hover:text-white">Is Your Home Ready?</Link></li>
              <li><Link href="/articles/questions-for-contractors" className="hover:text-white">Contractor Questions</Link></li>
              <li><Link href="/articles/why-heat-pumps-fail" className="hover:text-white">Why Heat Pumps Fail</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <p className="text-gray-400">Questions about heat pump installation in Maryland?</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 DMV Heat Pumps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
