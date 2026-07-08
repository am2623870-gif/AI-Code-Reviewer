import { motion } from "framer-motion";

interface ScoreCardProps {
  title: string;
  score: string;
  icon: React.ReactNode;
}

export default function ScoreCard({
  title,
  score,
  icon,
}: ScoreCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -4,
      }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 shadow-lg hover:border-cyan-500/50"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm uppercase tracking-wide text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {score}
          </h2>

        </div>

        <div className="rounded-xl bg-slate-800 p-3">
          {icon}
        </div>

      </div>
    </motion.div>
  );
}