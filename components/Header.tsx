import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            DMV Heat Pumps
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/articles/heat-pump-ready" className="text-gray-700 hover:text-blue-600">Articles</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
