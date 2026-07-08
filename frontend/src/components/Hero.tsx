import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center pt-20 pb-16">

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400 backdrop-blur-sm">

        <Sparkles className="w-4 h-4" />

        <span>AI Powered Developer Assistant</span>

      </div>

      {/* Main Title */}

      <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">

        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">

          AI Code Reviewer

        </span>

      </h1>

      {/* Subtitle */}

      <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-400 leading-8">

        Review, explain, optimize, debug, refactor and secure your code
        using{" "}
        <span className="font-semibold text-cyan-400">
          Google Gemini AI
        </span>
        .

      </p>

      {/* Developer */}

      <div className="mt-6 flex items-center gap-2 text-slate-500">

        <div className="h-px w-10 bg-slate-700" />

        <p className="text-base">

          Developed by{" "}

          <span className="font-semibold text-cyan-400">

            Aman Mishra

          </span>

        </p>

        <div className="h-px w-10 bg-slate-700" />

      </div>

    </section>
  );
}