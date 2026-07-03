type ScoreCardProps = {
  title: string;
  score: string;
  icon: string;
};

export default function ScoreCard({
  title,
  score,
  icon,
}: ScoreCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-500 transition">
      <div className="text-3xl mb-2">{icon}</div>

      <h3 className="text-slate-300 text-sm">
        {title}
      </h3>

      <p className="text-2xl font-bold text-cyan-400 mt-2">
        {score}
      </p>
    </div>
  );
}