import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CATEGORY_COLORS } from "@/lib/data";

interface ProgressBarProps {
  currentCard: number;
  totalCards: number;
  category: string;
  className?: string;
}

export default function ProgressBar({ 
  currentCard, 
  totalCards, 
  category,
  className 
}: ProgressBarProps) {
  const progress = (currentCard / totalCards) * 100;
  const categoryColor = CATEGORY_COLORS[category] || "blue";

  return (
    <div className={cn("space-y-3", className)} data-testid="progress-bar">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <span className="text-sm font-medium" data-testid="text-progress">
          Tarjeta <span className="text-primary">{currentCard}</span> de {totalCards}
        </span>
        <Badge 
          variant="secondary"
          className={`bg-category-${categoryColor}/10 text-category-${categoryColor} border-category-${categoryColor}/30`}
          data-testid="badge-category"
        >
          {category}
        </Badge>
      </div>
      <Progress value={progress} className="h-2" data-testid="progress-indicator" />
    </div>
  );
}
