import { Card } from "@/components/ui/card";
import { BookOpen, Star, Target, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsPanelProps {
  totalStudied: number;
  favoritesCount: number;
  quizAccuracy: number;
  studyTime: string;
  className?: string;
}

export default function StatsPanel({
  totalStudied,
  favoritesCount,
  quizAccuracy,
  studyTime,
  className
}: StatsPanelProps) {
  const stats = [
    {
      icon: BookOpen,
      label: "Estudiadas",
      value: totalStudied.toString(),
      color: "text-primary",
      testId: "stat-studied"
    },
    {
      icon: Star,
      label: "Favoritos",
      value: favoritesCount.toString(),
      color: "text-yellow-500",
      testId: "stat-favorites"
    },
    {
      icon: Target,
      label: "Precisión",
      value: `${quizAccuracy}%`,
      color: quizAccuracy >= 70 ? "text-success" : "text-destructive",
      testId: "stat-accuracy"
    },
    {
      icon: Clock,
      label: "Tiempo",
      value: studyTime,
      color: "text-muted-foreground",
      testId: "stat-time"
    }
  ];

  return (
    <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-4", className)} data-testid="stats-panel">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4 hover-elevate" data-testid={stat.testId}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <stat.icon className={cn("h-5 w-5", stat.color)} />
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
