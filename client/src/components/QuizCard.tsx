import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: number;
  onAnswer?: (isCorrect: boolean, selectedIndex: number) => void;
  className?: string;
}

export default function QuizCard({ 
  question, 
  options, 
  correctAnswer,
  onAnswer,
  className 
}: QuizCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return;
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex === null || hasAnswered) return;
    
    setHasAnswered(true);
    const isCorrect = selectedIndex === correctAnswer;
    onAnswer?.(isCorrect, selectedIndex);
  };

  const getOptionClassName = (index: number) => {
    if (!hasAnswered) {
      return cn(
        "w-full text-left p-4 rounded-md border-2 transition-all",
        "hover-elevate active-elevate-2",
        selectedIndex === index
          ? "border-primary bg-primary/5"
          : "border-border bg-card"
      );
    }

    if (index === correctAnswer) {
      return "w-full text-left p-4 rounded-md border-2 border-success bg-success/10";
    }

    if (index === selectedIndex && index !== correctAnswer) {
      return "w-full text-left p-4 rounded-md border-2 border-destructive bg-destructive/10";
    }

    return "w-full text-left p-4 rounded-md border-2 border-border bg-card opacity-50";
  };

  const getOptionIcon = (index: number) => {
    if (!hasAnswered) return null;

    if (index === correctAnswer) {
      return <Check className="h-5 w-5 text-success" />;
    }

    if (index === selectedIndex && index !== correctAnswer) {
      return <X className="h-5 w-5 text-destructive" />;
    }

    return null;
  };

  return (
    <Card className={cn("w-full max-w-2xl mx-auto p-6 space-y-6", className)} data-testid="quiz-card">
      <div>
        <h3 className="text-lg font-semibold leading-relaxed" data-testid="text-quiz-question">
          {question}
        </h3>
      </div>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={hasAnswered}
            className={getOptionClassName(index)}
            data-testid={`button-option-${index}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex-1">{option}</span>
              {getOptionIcon(index)}
            </div>
          </button>
        ))}
      </div>

      {!hasAnswered && (
        <Button
          onClick={handleSubmit}
          disabled={selectedIndex === null}
          className="w-full"
          size="lg"
          data-testid="button-submit-answer"
        >
          Enviar Respuesta
        </Button>
      )}

      {hasAnswered && (
        <div
          className={cn(
            "p-4 rounded-md border-2",
            selectedIndex === correctAnswer
              ? "border-success bg-success/10"
              : "border-destructive bg-destructive/10"
          )}
          data-testid="quiz-feedback"
        >
          <p className="font-medium">
            {selectedIndex === correctAnswer
              ? "¡Correcto! 🎉"
              : "Incorrecto 😔"}
          </p>
          {selectedIndex !== correctAnswer && (
            <p className="text-sm mt-1 text-muted-foreground">
              La respuesta correcta es: {options[correctAnswer]}
            </p>
          )}
        </div>
      )}
    </Card>
  );
}
