import { Code2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">

            <Code2 className="w-7 h-7 text-white" />

          </div>

          <div>

            <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">

              AI Code Reviewer

            </h1>

            <p className="text-sm text-slate-400">

              Developed by{" "}
              <span className="font-semibold text-cyan-400">
                Aman Mishra
              </span>

            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900">

            <Sparkles className="w-4 h-4 text-cyan-400" />

            <span className="text-sm text-slate-300 font-medium">
              Powered by Gemini AI
            </span>

          </div>

          <a
            href="https://github.com/am2623870-gif"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-cyan-500 hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
            title="Visit my GitHub"
          >
            <FaGithub className="text-white text-xl" />
          </a>

        </div>

      </div>

    </header>
  );
}