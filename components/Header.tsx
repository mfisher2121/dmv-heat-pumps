import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-5 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
            DMV Heat Pumps
          </Link>
          <nav className="flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link href="/articles/heat-pump-ready" className="text-gray-700 hover:text-blue-600 font-medium transition">Articles</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
