import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import seedRecipes from "../data/recipes";

const RecipeContext = createContext(null);

const PER_PAGE = 10;

const defaultFilters = {
  search: "",
  category: "all",
  sort: "popular",
  maxTime: Infinity
};

function useStoredState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export function RecipeProvider({ children }) {
  const [userRecipes, setUserRecipes] = useStoredState("userRecipes", []);
  const [favorites, setFavorites] = useStoredState("favorites", []);

  const [filters, setFilters] = useState(defaultFilters);
  const [page, setPage] = useState(1);
  const [toast, setToast] = useState(null);

  const allRecipes = useMemo(() => {
    return [...seedRecipes, ...userRecipes];
  }, [userRecipes]);

  const filteredRecipes = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    let result = allRecipes.filter((recipe) => {
      const matchesSearch =
        !search ||
        recipe.title.toLowerCase().includes(search) ||
        recipe.desc.toLowerCase().includes(search) ||
        recipe.tags.some((tag) =>
          tag.toLowerCase().includes(search)
        );

      const matchesCategory =
        filters.category === "all" ||
        recipe.category === filters.category;

      const matchesTime = recipe.time <= filters.maxTime;

      return matchesSearch && matchesCategory && matchesTime;
    });

    const sorters = {
      popular: (a, b) => b.reviews - a.reviews,
      rating: (a, b) => b.rating - a.rating,
      newest: (a, b) => b.id - a.id,
      quickest: (a, b) => a.time - b.time
    };

    return result.sort(sorters[filters.sort]);
  }, [allRecipes, filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredRecipes.length / PER_PAGE)
  );

  const updateFilters = useCallback((newFilters) => {
    setFilters((current) => ({
      ...current,
      ...newFilters
    }));
    setPage(1);
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(defaultFilters);
    setPage(1);
  }, []);

  const addRecipe = useCallback((recipe) => {
    setUserRecipes((current) => [recipe, ...current]);
  }, [setUserRecipes]);

  const toggleFavorite = useCallback((recipeId) => {
    setFavorites((current) => {
      if (current.includes(recipeId)) {
        return current.filter((id) => id !== recipeId);
      }

      return [...current, recipeId];
    });
  }, [setFavorites]);

  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type });
  }, []);

  const value = {
    allRecipes,
    filteredRecipes,
    filters,
    updateFilters,
    resetFilters,
    page,
    setPage,
    totalPages,
    PER_PAGE,
    favorites,
    toggleFavorite,
    addRecipe,
    toast,
    setToast,
    showToast
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error("useRecipes must be used inside RecipeProvider");
  }

  return context;
}