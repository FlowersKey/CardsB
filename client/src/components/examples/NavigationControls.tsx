import { useState } from 'react';
import NavigationControls from '../NavigationControls';

export default function NavigationControlsExample() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="p-8 bg-background min-h-screen flex items-center justify-center">
      <NavigationControls
        onPrevious={() => console.log('Previous')}
        onNext={() => console.log('Next')}
        onFlip={() => console.log('Flip')}
        onShuffle={() => console.log('Shuffle')}
        onToggleFavorite={() => setIsFavorite(!isFavorite)}
        isFavorite={isFavorite}
        hasPrevious={true}
        hasNext={true}
      />
    </div>
  );
}
