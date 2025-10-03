import { useState, useEffect, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import FlashCard from "@/components/FlashCard";
import QuizCard from "@/components/QuizCard";
import FilterBar from "@/components/FilterBar";
import StatsPanel from "@/components/StatsPanel";
import ProgressBar from "@/components/ProgressBar";
import NavigationControls from "@/components/NavigationControls";
import QuizTimer from "@/components/QuizTimer";
import { flashcardsData, quizQuestions } from "@/lib/data";
import { BookOpen, Trophy, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([]);
  const [quizTime, setQuizTime] = useState(0);
  const [showQuizResults, setShowQuizResults] = useState(false);
  
  const [studyStartTime] = useState(Date.now());
  const [studyTime, setStudyTime] = useState("0:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - studyStartTime) / 1000);
      const mins = Math.floor(elapsed / 60);
      const secs = elapsed % 60;
      setStudyTime(`${mins}:${secs.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [studyStartTime]);

  const filteredCards = useMemo(() => {
    return flashcardsData.filter(card => {
      const matchesSearch = !searchTerm || 
        card.front.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.back.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || card.category === selectedCategory;
      const matchesFavorites = !showFavoritesOnly || favorites.has(card.id);
      
      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [searchTerm, selectedCategory, showFavoritesOnly, favorites]);

  const currentCard = filteredCards[currentCardIndex];

  const toggleFavorite = () => {
    if (!currentCard) return;
    
    const newFavorites = new Set(favorites);
    if (newFavorites.has(currentCard.id)) {
      newFavorites.delete(currentCard.id);
      toast({
        description: "Eliminado de favoritos",
      });
    } else {
      newFavorites.add(currentCard.id);
      toast({
        description: "Añadido a favoritos",
      });
    }
    setFavorites(newFavorites);
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < filteredCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      if (currentCard) {
        const newStudiedCards = new Set(studiedCards);
        newStudiedCards.add(currentCard.id);
        setStudiedCards(newStudiedCards);
      }
    }
  };

  const handleShuffle = () => {
    setCurrentCardIndex(Math.floor(Math.random() * filteredCards.length));
    toast({
      description: "Tarjetas mezcladas",
    });
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setQuizAnswers([]);
    setQuizTime(0);
    setShowQuizResults(false);
  };

  const handleQuizAnswer = (isCorrect: boolean) => {
    const newAnswers = [...quizAnswers, isCorrect];
    setQuizAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowQuizResults(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setShowQuizResults(false);
    setCurrentQuestionIndex(0);
    setQuizAnswers([]);
  };

  const quizScore = quizAnswers.filter(Boolean).length;
  const quizAccuracy = quizAnswers.length > 0 
    ? Math.round((quizScore / quizAnswers.length) * 100) 
    : 0;

  if (filteredCards.length === 0) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <header className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">🧬 Estudio Interactivo</h1>
            <p className="text-muted-foreground">Química y Biología</p>
          </header>

          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            showFavoritesOnly={showFavoritesOnly}
            onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
            favoritesCount={favorites.size}
          />

          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No se encontraron tarjetas con los filtros seleccionados
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">🧬 Estudio Interactivo</h1>
          <p className="text-muted-foreground">Química y Biología - 50 Tarjetas · 25 Preguntas</p>
        </header>

        <StatsPanel
          totalStudied={studiedCards.size}
          favoritesCount={favorites.size}
          quizAccuracy={quizAccuracy}
          studyTime={studyTime}
        />

        <Tabs defaultValue="flashcards" className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="flashcards" data-testid="tab-flashcards">
              <BookOpen className="h-4 w-4 mr-2" />
              Tarjetas
            </TabsTrigger>
            <TabsTrigger value="quiz" data-testid="tab-quiz">
              <Trophy className="h-4 w-4 mr-2" />
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flashcards" className="space-y-6">
            <FilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              showFavoritesOnly={showFavoritesOnly}
              onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
              favoritesCount={favorites.size}
            />

            {currentCard && (
              <>
                <ProgressBar
                  currentCard={currentCardIndex + 1}
                  totalCards={filteredCards.length}
                  category={currentCard.category}
                />

                <FlashCard
                  front={currentCard.front}
                  back={currentCard.back}
                  category={currentCard.category}
                  isFavorite={favorites.has(currentCard.id)}
                  onToggleFavorite={toggleFavorite}
                  onFlip={() => {
                    if (currentCard && !studiedCards.has(currentCard.id)) {
                      const newStudiedCards = new Set(studiedCards);
                      newStudiedCards.add(currentCard.id);
                      setStudiedCards(newStudiedCards);
                    }
                  }}
                />

                <NavigationControls
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  onFlip={() => {}}
                  onShuffle={handleShuffle}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={favorites.has(currentCard.id)}
                  hasPrevious={currentCardIndex > 0}
                  hasNext={currentCardIndex < filteredCards.length - 1}
                />
              </>
            )}
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            {!quizStarted ? (
              <div className="max-w-2xl mx-auto text-center space-y-6 py-12">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Quiz de Química y Biología</h2>
                  <p className="text-muted-foreground">
                    25 preguntas de alternativa múltiple
                  </p>
                </div>
                <Button size="lg" onClick={startQuiz} data-testid="button-start-quiz">
                  Comenzar Quiz
                </Button>
              </div>
            ) : showQuizResults ? (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center space-y-4 p-8 border-2 border-primary rounded-lg bg-primary/5">
                  <Trophy className="h-16 w-16 mx-auto text-primary" />
                  <h2 className="text-3xl font-bold">¡Quiz Completado!</h2>
                  <div className="space-y-2">
                    <p className="text-5xl font-bold text-primary">
                      {quizScore} / {quizAnswers.length}
                    </p>
                    <p className="text-muted-foreground">
                      Precisión: {quizAccuracy}%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tiempo: {Math.floor(quizTime / 60)}:{(quizTime % 60).toString().padStart(2, '0')}
                    </p>
                  </div>
                  <Button onClick={resetQuiz} variant="outline" data-testid="button-restart-quiz">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reintentar Quiz
                  </Button>
                </div>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}
                  </span>
                  <QuizTimer 
                    isRunning={true} 
                    onTick={(seconds) => setQuizTime(seconds)}
                  />
                </div>

                <QuizCard
                  question={quizQuestions[currentQuestionIndex].question}
                  options={quizQuestions[currentQuestionIndex].options}
                  correctAnswer={quizQuestions[currentQuestionIndex].correctAnswer}
                  onAnswer={handleQuizAnswer}
                />
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
