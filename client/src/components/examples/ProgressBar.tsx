import ProgressBar from '../ProgressBar';

export default function ProgressBarExample() {
  return (
    <div className="p-8 bg-background min-h-screen">
      <div className="max-w-2xl mx-auto">
        <ProgressBar
          currentCard={15}
          totalCards={50}
          category="Estructura Atómica"
        />
      </div>
    </div>
  );
}
