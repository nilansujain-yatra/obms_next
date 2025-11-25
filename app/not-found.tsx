import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF3F3]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-foreground mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
