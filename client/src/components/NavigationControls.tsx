import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCw, Shuffle, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onFlip: () => void;
  onShuffle: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  className?: string;
}

export default function NavigationControls({
  onPrevious,
  onNext,
  onFlip,
  onShuffle,
  onToggleFavorite,
  isFavorite = false,
  hasPrevious,
  hasNext,
  className
}: NavigationControlsProps) {
  return (
    <div className={cn("space-y-4", className)} data-testid="navigation-controls">
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!hasPrevious}
          data-testid="button-previous"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Anterior
        </Button>
        
        <Button
          variant="default"
          onClick={onFlip}
          data-testid="button-flip"
        >
          <RotateCw className="h-4 w-4 mr-2" />
          Voltear
        </Button>
        
        <Button
          variant="outline"
          onClick={onNext}
          disabled={!hasNext}
          data-testid="button-next"
        >
          Siguiente
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {onToggleFavorite && (
          <Button
            variant="outline"
            onClick={onToggleFavorite}
            data-testid="button-add-favorite"
          >
            <Star className={cn(
              "h-4 w-4 mr-2",
              isFavorite && "fill-yellow-400 text-yellow-400"
            )} />
            Favorito
          </Button>
        )}
        
        <Button
          variant="outline"
          onClick={onShuffle}
          data-testid="button-shuffle"
        >
          <Shuffle className="h-4 w-4 mr-2" />
          Mezclar
        </Button>
      </div>
    </div>
  );
}
