import {
  Bot,
  BookOpen,
  Zap,
  Bug,
  Shield,
  RefreshCcw,
} from "lucide-react";

interface Props {
  selected: string;
  onSelect: (mode: string) => void;
}

const features = [
  {
    name: "Review",
    icon: Bot,
    color: "text-cyan-400",
  },
  {
    name: "Explain",
    icon: BookOpen,
    color: "text-green-400",
  },
  {
    name: "Optimize",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    name: "Debug",
    icon: Bug,
    color: "text-red-400",
  },
  {
    name: "Security",
    icon: Shield,
    color: "text-purple-400",
  },
  {
    name: "Refactor",
    icon: RefreshCcw,
    color: "text-pink-400",
  },
];

export default function FeatureBar({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-6">
      {features.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.name}
            onClick={() => onSelect(item.name)}
            className={`
              h-28
              w-full
              rounded-2xl
              border
              transition-all
              duration-300
              flex
              flex-col
              items-center
              justify-center
              ${
                selected === item.name
                  ? "border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                  : "border-slate-800 bg-slate-900 hover:border-cyan-500 hover:-translate-y-1"
              }
            `}
          >
            <Icon className={`h-8 w-8 mb-3 ${item.color}`} />

            <span className="text-lg font-semibold">
              {item.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}