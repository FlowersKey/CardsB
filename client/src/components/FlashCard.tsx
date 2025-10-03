import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORY_COLORS } from "@/lib/data";

interface FlashCardProps {
  front: string;
  back: string;
  category: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onFlip?: () => void;
  className?: string;
}

export default function FlashCard({ 
  front, 
  back, 
  category, 
  isFavorite = false,
  onToggleFavorite,
  onFlip,
  className 
}: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const categoryColor = CATEGORY_COLORS[category] || "blue";

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onFlip?.();
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite?.();
  };

  return (
    <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
      <div 
        className="relative cursor-pointer group"
        onClick={handleFlip}
        style={{ perspective: "1000px" }}
        data-testid="flashcard-container"
      >
        <div
          className={cn(
            "relative w-full transition-transform duration-600 ease-out",
            isFlipped && "rotate-y-180"
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s ease-out"
          }}
        >
          <Card
            className={cn(
              "w-full aspect-[3/2] flex flex-col justify-center items-center p-8 border-2",
              `border-category-${categoryColor}/30`,
              "backface-hidden hover-elevate active-elevate-2"
            )}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
            data-testid="flashcard-front"
          >
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge 
                variant="secondary" 
                className={`bg-category-${categoryColor}/10 text-category-${categoryColor} border-category-${categoryColor}/30`}
                data-testid="category-badge"
              >
                {category}
              </Badge>
              {onToggleFavorite && (
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleFavoriteClick}
                  className="h-8 w-8"
                  data-testid="button-favorite"
                >
                  <Star 
                    className={cn(
                      "h-4 w-4",
                      isFavorite && "fill-yellow-400 text-yellow-400"
                    )} 
                  />
                </Button>
              )}
            </div>
            
            <div className="flex-1 flex items-center justify-center text-center">
              <p className="text-xl font-medium leading-relaxed" data-testid="text-question">
                {front}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <RotateCw className="h-4 w-4" />
              <span>Haz clic para ver la respuesta</span>
            </div>
          </Card>

          <Card
            className={cn(
              "absolute inset-0 w-full aspect-[3/2] flex flex-col justify-center items-center p-8 border-2",
              `border-category-${categoryColor}/30`,
              "backface-hidden"
            )}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
            data-testid="flashcard-back"
          >
            <div className="absolute top-4 right-4">
              <Badge 
                variant="secondary"
                className={`bg-category-${categoryColor}/10 text-category-${categoryColor} border-category-${categoryColor}/30`}
              >
                {category}
              </Badge>
            </div>

            <div className="flex-1 flex items-center justify-center text-center">
              <p className="text-lg leading-relaxed" data-testid="text-answer">
                {back}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <RotateCw className="h-4 w-4" />
              <span>Haz clic para ver la pregunta</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
