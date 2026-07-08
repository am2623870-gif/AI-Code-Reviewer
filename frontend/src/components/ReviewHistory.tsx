interface HistoryItem {
  language: string;
  code: string;
  review: string;
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
    <div className="bg-slate-900 rounded-xl p-4 shadow-lg">
      <h2 className="text-xl font-semibold text-cyan-400 mb-4">
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
              className="w-full text-left bg-slate-800 hover:bg-slate-700 rounded-lg p-3 transition"
            >
              <div className="font-semibold capitalize">
                {item.language}
              </div>

              <div className="text-sm text-slate-400">
                {item.date}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}