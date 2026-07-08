import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
  Sparkles,
  Clipboard,
  Download,
  Bot,
} from "lucide-react";

interface Props {
  review: string;
  loading: boolean;
  copied: boolean;
  onCopy: () => void;
  onDownload: () => void;
}

export default function ReviewPanel({
  review,
  loading,
  copied,
  onCopy,
  onDownload,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-cyan-500/10 p-3">

            <Bot className="h-6 w-6 text-cyan-400" />

          </div>

          <div>

            <h2 className="text-xl font-bold">
              Gemini AI Review
            </h2>

            <p className="text-sm text-slate-400">
              Professional AI-powered code analysis
            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={onCopy}
            className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 hover:bg-slate-700 transition"
          >
            <Clipboard className="h-4 w-4" />
            {copied ? "Copied" : "Copy"}
          </button>

          <button
            onClick={onDownload}
            className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 hover:bg-cyan-700 transition"
          >
            <Download className="h-4 w-4" />
            Download
          </button>

        </div>

      </div>

      {/* Body */}

      <div className="min-h-[650px] bg-slate-950 p-8 overflow-y-auto">

        {loading ? (

          <div className="flex h-full items-center justify-center">

            <div className="text-center">

              <div className="mx-auto h-20 w-20 animate-spin rounded-full border-b-4 border-cyan-400"></div>

              <h3 className="mt-6 text-xl font-semibold">
                Gemini is thinking...
              </h3>

              <p className="mt-2 text-slate-400">
                Reviewing your code...
              </p>

            </div>

          </div>

        ) : review ? (

          <div className="prose prose-invert max-w-none">

            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children }) {
                  const match = /language-(\w+)/.exec(className || "");

                  return match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {review}
            </ReactMarkdown>

          </div>

        ) : (

          <div className="flex h-full items-center justify-center">

            <div className="max-w-lg text-center">

              <Sparkles className="mx-auto h-16 w-16 text-cyan-400" />

              <h2 className="mt-6 text-3xl font-bold">
                Welcome
              </h2>

              <p className="mt-4 text-slate-400">

                Click <strong>Review Code</strong> to let Gemini analyze your
                project.

              </p>

              <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-left">

                <h3 className="mb-3 font-semibold">
                  The AI will generate:
                </h3>

                <ul className="space-y-2 text-slate-400">

                  <li>⭐ Overall Score</li>
                  <li>📝 Executive Summary</li>
                  <li>🐞 Bugs</li>
                  <li>🔒 Security Issues</li>
                  <li>⚡ Performance</li>
                  <li>📖 Readability</li>
                  <li>✅ Best Practices</li>
                  <li>📈 Time Complexity</li>
                  <li>💾 Space Complexity</li>
                  <li>🚀 Optimized Code</li>
                  <li>🎯 Final Verdict</li>

                </ul>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}