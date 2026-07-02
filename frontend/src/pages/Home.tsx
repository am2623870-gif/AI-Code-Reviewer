import { useState } from "react";
import Navbar from "../components/Navbar";
import CodeEditor from "../components/CodeEditor";
import api from "../services/api";

export default function Home() {
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(`function hello() {
  console.log("Hello World");
}`);

  const [review, setReview] = useState("");

  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    try {
      setLoading(true);

      const response = await api.post("/review", {
        language,
        code,
      });

      setReview(response.data.review);
    } catch (error) {
      console.error(error);
      setReview("❌ Failed to connect to the backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main className="p-6">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">
            AI Code Reviewer
          </h1>

          <p className="text-slate-400 mt-2">
            Analyze your code with AI, detect bugs, improve performance,
            and receive intelligent suggestions.
          </p>
        </div>

        {/* Top Controls */}

        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-cyan-400"
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>

          <button
            onClick={handleReview}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-lg font-semibold transition"
          >
            {loading ? "Reviewing..." : "Review Code"}
          </button>

        </div>

        {/* Main Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Panel */}

          <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden">

            <div className="border-b border-slate-700 px-4 py-3">
              <h2 className="text-xl font-semibold">
                Code Editor
              </h2>
            </div>

            <CodeEditor
              language={language}
              code={code}
              onChange={setCode}
            />

          </div>

          {/* Right Panel */}

          <div className="bg-slate-800 rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-6 text-cyan-400">
              AI Review
            </h2>

            <div className="bg-slate-900 rounded-lg p-5 h-[70vh] overflow-auto border border-slate-700">

              <pre className="whitespace-pre-wrap text-slate-300 leading-7">
                {review || "Click 'Review Code' to analyze your code."}
              </pre>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}