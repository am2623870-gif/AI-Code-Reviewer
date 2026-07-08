import {
  Star,
  ShieldCheck,
  Zap,
  BookOpen,
  Sparkles,
} from "lucide-react";

import ScoreCard from "./ScoreCard";

interface Props {
  scores: {
    overall: string;
    security: string;
    performance: string;
    readability: string;
    practices: string;
  };
}

export default function Dashboard({ scores }: Props) {
  return (
    <section className="grid gap-5 grid-cols-2 lg:grid-cols-5">

      <ScoreCard
        title="Overall"
        score={scores.overall}
        icon={<Star className="text-yellow-400" />}
      />

      <ScoreCard
        title="Security"
        score={scores.security}
        icon={<ShieldCheck className="text-red-400" />}
      />

      <ScoreCard
        title="Performance"
        score={scores.performance}
        icon={<Zap className="text-cyan-400" />}
      />

      <ScoreCard
        title="Readability"
        score={scores.readability}
        icon={<BookOpen className="text-green-400" />}
      />

      <ScoreCard
        title="Best Practices"
        score={scores.practices}
        icon={<Sparkles className="text-purple-400" />}
      />

    </section>
  );
}