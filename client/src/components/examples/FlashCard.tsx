import FlashCard from '../FlashCard';

export default function FlashCardExample() {
  return (
    <div className="p-8 bg-background min-h-screen flex items-center justify-center">
      <FlashCard
        front="¿Qué es un átomo?"
        back="Unidad básica de la materia con protones, neutrones y electrones."
        category="Estructura Atómica"
        isFavorite={false}
        onToggleFavorite={() => console.log('Toggle favorite')}
        onFlip={() => console.log('Card flipped')}
      />
    </div>
  );
}
