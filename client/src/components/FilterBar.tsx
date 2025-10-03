import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Star, X } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
  favoritesCount?: number;
  className?: string;
}

export default function FilterBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  showFavoritesOnly,
  onToggleFavorites,
  favoritesCount = 0,
  className
}: FilterBarProps) {
  return (
    <div className={cn("space-y-4", className)} data-testid="filter-bar">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="search" className="text-sm font-medium">
            Buscar
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              type="search"
              placeholder="Buscar en tarjetas..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-10"
              data-testid="input-search"
            />
            {searchTerm && (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => onSearchChange("")}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                data-testid="button-clear-search"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm font-medium">
            Categoría
          </Label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger id="category" data-testid="select-category">
              <SelectValue placeholder="Todas las categorías" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              {CATEGORIES.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Filtros</Label>
          <Button
            variant={showFavoritesOnly ? "default" : "outline"}
            onClick={onToggleFavorites}
            className="w-full justify-start gap-2"
            data-testid="button-toggle-favorites"
          >
            <Star className={cn(
              "h-4 w-4",
              showFavoritesOnly && "fill-current"
            )} />
            <span>Favoritos</span>
            {favoritesCount > 0 && (
              <span className="ml-auto text-xs">
                ({favoritesCount})
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
