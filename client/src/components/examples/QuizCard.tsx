import QuizCard from '../QuizCard';

export default function QuizCardExample() {
  return (
    <div className="p-8 bg-background min-h-screen flex items-center justify-center">
      <QuizCard
        question="¿Cuáles son las tres partículas subatómicas fundamentales?"
        options={[
          "Protones, neutrones y iones",
          "Protones, electrones y neutrones",
          "Electrones, fotones y protones",
          "Neutrones, quarks y electrones"
        ]}
        correctAnswer={1}
        onAnswer={(isCorrect, selectedIndex) => {
          console.log('Answer submitted:', { isCorrect, selectedIndex });
        }}
      />
    </div>
  );
}
