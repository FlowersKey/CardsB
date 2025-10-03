import StatsPanel from '../StatsPanel';

export default function StatsPanelExample() {
  return (
    <div className="p-8 bg-background min-h-screen">
      <StatsPanel
        totalStudied={15}
        favoritesCount={5}
        quizAccuracy={85}
        studyTime="12:34"
      />
    </div>
  );
}
