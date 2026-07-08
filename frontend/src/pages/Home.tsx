import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureBar from "../components/FeatureBar";
import Dashboard from "../components/Dashboard";
import CodeEditor from "../components/CodeEditor";
import ReviewPanel from "../components/ReviewPanel";
import ReviewHistory from "../components/ReviewHistory";
import FileUploader from "../components/FileUploader";

import api from "../services/api";

interface HistoryItem {
  language: string;
  code: string;
  review: string;
  mode: string;
  date: string;
}

export default function Home() {

  const [language, setLanguage] = useState("javascript");

  const [mode, setMode] = useState("Review");

  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}`);

  const [review, setReview] = useState("");

  const [loading, setLoading] = useState(false);

  const [copied, setCopied] = useState(false);

  const [fileName, setFileName] = useState("");

  const [scores, setScores] = useState({
    overall: "--",
    security: "--",
    performance: "--",
    readability: "--",
    practices: "--",
  });

  const [history, setHistory] = useState<HistoryItem[]>(() => {

    const saved = localStorage.getItem("reviewHistory");

    return saved ? JSON.parse(saved) : [];

  });

  const extractScores = (text: string) => {

    const getScore = (regex: RegExp) =>
      text.match(regex)?.[1] ?? "--";

    setScores({

      overall:
        getScore(/Overall Score.*?(\d+(\.\d+)?\/10)/is),

      security:
        getScore(/Security Score.*?(\d+(\.\d+)?\/10)/is),

      performance:
        getScore(/Performance Score.*?(\d+(\.\d+)?\/10)/is),

      readability:
        getScore(/Readability Score.*?(\d+(\.\d+)?\/10)/is),

      practices:
        getScore(/Best Practices Score.*?(\d+(\.\d+)?\/10)/is),

    });

  };

  const handleReview = async () => {

    if (!code.trim()) {

      setReview("# Please enter some code.");

      return;

    }

    try {

      setLoading(true);

      const response = await api.post("/review", {

        language,

        code,

        mode,

      });

      const aiReview = response.data.review;

      setReview(aiReview);

      extractScores(aiReview);
            const newHistory: HistoryItem = {
        language,
        code,
        review: aiReview,
        mode,
        date: new Date().toLocaleString(),
      };

      const updatedHistory = [
        newHistory,
        ...history,
      ].slice(0, 10);

      setHistory(updatedHistory);

      localStorage.setItem(
        "reviewHistory",
        JSON.stringify(updatedHistory)
      );

    } catch (error) {

      console.error(error);

      setReview(`# ❌ AI Request Failed

Please check:

• Backend server is running

• Gemini API key is valid

• Internet connection

• Backend route is correct

`);

    } finally {

      setLoading(false);

    }

  };

  const copyReview = async () => {

    if (!review) return;

    try {

      await navigator.clipboard.writeText(review);

      setCopied(true);

      setTimeout(() => {

        setCopied(false);

      }, 2000);

    } catch (err) {

      console.error(err);

    }

  };

  const downloadMarkdown = () => {

    if (!review) return;

    const blob = new Blob([review], {
      type: "text/markdown",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "AI-Code-Review.md";

    a.click();

    URL.revokeObjectURL(url);

  };

  const loadReview = (item: HistoryItem) => {

    setLanguage(item.language);

    setCode(item.code);

    setMode(item.mode);

    setReview(item.review);

    extractScores(item.review);

  };

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">

        <Hero />

        <section className="mt-12">
          <FeatureBar
            selected={mode}
            onSelect={setMode}
          />
        </section>

        <section className="mt-16">
          <Dashboard scores={scores} />
        </section>
                <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= LEFT PANEL ================= */}

          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden">

              {/* Header */}

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b border-slate-800 p-6">

                <div>

                  <h2 className="text-2xl font-bold text-white">
                    Code Editor
                  </h2>

                  <p className="mt-1 text-slate-400">
                    Paste your code or upload a source file to let Gemini AI analyze it.
                  </p>

                </div>

                <div className="flex flex-wrap items-center gap-3">

                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-2 text-white outline-none focus:border-cyan-500"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                    <option value="go">Go</option>
                    <option value="php">PHP</option>
                    <option value="rust">Rust</option>
                  </select>

                  <button
                    onClick={handleReview}
                    disabled={loading}
                    className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 font-semibold text-white transition hover:scale-105 disabled:opacity-50"
                  >
                    {loading ? "Analyzing..." : `${mode} Code`}
                  </button>

                </div>

              </div>

              {/* Upload */}

              <div className="border-b border-slate-800 p-6">

                <FileUploader
                  fileName={fileName}
                  setFileName={setFileName}
                  setCode={setCode}
                />

              </div>

              {/* Monaco Editor */}

              <CodeEditor
                language={language}
                code={code}
                onChange={setCode}
              />

            </div>

          </div>

          {/* ================= RIGHT PANEL ================= */}

          <div className="lg:col-span-1">

            <ReviewPanel
              review={review}
              loading={loading}
              copied={copied}
              onCopy={copyReview}
              onDownload={downloadMarkdown}
            />

          </div>

        </section>
                {/* ================= REVIEW HISTORY ================= */}

        <section className="mt-16">

          <ReviewHistory
            history={history}
            onLoad={loadReview}
          />

        </section>

      </main>

    </div>

  );

}