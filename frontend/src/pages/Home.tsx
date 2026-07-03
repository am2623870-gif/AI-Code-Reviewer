import { useState } from "react";
import Navbar from "../components/Navbar";
import CodeEditor from "../components/CodeEditor";
import ScoreCard from "../components/ScoreCard";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import api from "../services/api";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Home() {
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}`);

  const [review, setReview] = useState("");

  const [loading, setLoading] = useState(false);

  // Dashboard scores (temporary values)
  const [scores] = useState({
    overall: "9.2/10",
    security: "9.5/10",
    performance: "8.8/10",
    readability: "9.0/10",
    practices: "9.3/10",
  });

  const handleReview = async () => {
    if (!code.trim()) {
      setReview("# ⚠️ Please enter some code first.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/review", {
        language,
        code,
      });

      setReview(response.data.review);
    } catch (error) {
      console.error(error);

      setReview(`# ❌ Error

Unable to review your code.

Please check:

- Backend server is running
- Gemini API key is valid
- Internet connection
`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">
            🤖 AI Code Reviewer
          </h1>

          <p className="text-slate-400 mt-2">
            Analyze your code using Gemini AI. Detect bugs, improve
            performance, enhance security, and follow best coding practices.
          </p>
        </div>

        {/* Dashboard */}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">

          <ScoreCard
            title="Overall"
            score={scores.overall}
            icon="⭐"
          />

          <ScoreCard
            title="Security"
            score={scores.security}
            icon="🔒"
          />

          <ScoreCard
            title="Performance"
            score={scores.performance}
            icon="⚡"
          />

          <ScoreCard
            title="Readability"
            score={scores.readability}
            icon="📖"
          />

          <ScoreCard
            title="Best Practices"
            score={scores.practices}
            icon="✅"
          />

        </div>

        {/* Controls */}

        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500"
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>

          <button
            onClick={handleReview}
            disabled={loading}
            className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition"
          >
            {loading ? "Reviewing..." : "🚀 Review Code"}
          </button>

        </div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Code Editor */}

          <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden">

            <div className="px-4 py-3 border-b border-slate-800">

              <h2 className="text-lg font-semibold">
                💻 Code Editor
              </h2>

            </div>

            <CodeEditor
              language={language}
              code={code}
              onChange={setCode}
            />

          </div>

          {/* AI Review */}

          <div className="bg-slate-900 rounded-xl shadow-lg overflow-hidden flex flex-col">

            <div className="px-4 py-3 border-b border-slate-800 flex justify-between">

              <h2 className="text-lg font-semibold text-cyan-400">
                🤖 AI Review
              </h2>

              {loading && (
                <span className="text-sm text-slate-400">
                  Gemini is thinking...
                </span>
              )}

            </div>

            <div className="flex-1 overflow-y-auto bg-slate-950 p-6">

              {loading ? (

                <div className="flex justify-center items-center h-full">

                  <div className="text-center">

                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto"></div>

                    <p className="mt-5 text-slate-400">
                      Analyzing your code...
                    </p>

                  </div>

                </div>

              ) : (

                <div
                  className="markdown-body"
                  style={{
                    backgroundColor: "#020617",
                    color: "white",
                    padding: "20px",
                    borderRadius: "12px",
                    overflowX: "auto",
                  }}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ className, children }) {
                        const match = /language-(\w+)/.exec(className || "");

                        if (match) {
                          return (
                            <SyntaxHighlighter
                              style={oneDark}
                              language={match[1]}
                              PreTag="div"
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          );
                        }

                        return (
                          <code className={className}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {review ||
`# 👋 Welcome

Click **Review Code** to analyze your program.

The AI will generate:

- ⭐ Overall Score
- 📝 Summary
- 🐞 Bugs
- 🔒 Security Issues
- ⚡ Performance
- 📖 Code Quality
- ✅ Best Practices
- 📈 Time Complexity
- 💾 Space Complexity
- 🚀 Optimized Code
- 🎯 Final Verdict`}
                  </ReactMarkdown>

                </div>

              )}

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}