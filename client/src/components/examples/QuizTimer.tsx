import QuizTimer from '../QuizTimer';

export default function QuizTimerExample() {
  return (
    <div className="p-8 bg-background min-h-screen flex items-center justify-center">
      <QuizTimer
        isRunning={true}
        onTick={(seconds) => console.log('Timer:', seconds)}
      />
    </div>
  );
}
