export default function Navbar() {
  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-8 py-4 flex justify-between items-center">

      <div>
        <h1 className="text-2xl font-bold text-cyan-400">
          AI Code Reviewer
        </h1>

        <p className="text-sm text-slate-400">
          Review • Optimize • Secure
        </p>
      </div>

      <button
        className="
          bg-cyan-500
          hover:bg-cyan-600
          px-5
          py-2
          rounded-lg
          font-semibold
          transition
        "
      >
        Login
      </button>

    </nav>
  );
}