import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizTimerProps {
  isRunning: boolean;
  onTick?: (seconds: number) => void;
  className?: string;
}

export default function QuizTimer({ isRunning, onTick, className }: QuizTimerProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        const newValue = prev + 1;
        onTick?.(newValue);
        return newValue;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, onTick]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={cn("flex items-center gap-2 font-mono text-lg", className)}
      data-testid="quiz-timer"
    >
      <Clock className="h-5 w-5" />
      <span>{formatTime(seconds)}</span>
    </div>
  );
}
