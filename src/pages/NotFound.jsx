import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-[var(--text-color)] mb-4">404</h1>
      <p className="text-xl text-[var(--text-color-sub)] mb-8">
        This page doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-lg hover:brightness-110 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
