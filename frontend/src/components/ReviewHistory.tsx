interface HistoryItem {
  language: string;
  code: string;
  review: string;
  mode: string;
  date: string;
}

interface Props {
  history: HistoryItem[];
  onLoad: (item: HistoryItem) => void;
}

export default function ReviewHistory({
  history,
  onLoad,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg backdrop-blur-xl">
      <h2 className="mb-5 text-xl font-bold text-cyan-400">
        📜 Review History
      </h2>

      {history.length === 0 ? (
        <p className="text-slate-400">
          No reviews yet.
        </p>
      ) : (
        <div className="space-y-3">
          {history.map((item, index) => (
            <button
              key={index}
              onClick={() => onLoad(item)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-left transition hover:border-cyan-500 hover:bg-slate-700"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold capitalize text-white">
                  {item.language}
                </span>

                <span className="rounded-lg bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-400">
                  {item.mode}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-400">
                {item.date}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}