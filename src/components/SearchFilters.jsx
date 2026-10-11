import { useRecipes } from "../context/RecipeContext.jsx";
import {
  blockLabel,
  btn,
  choiceLabel,
  field,
  fieldset,
  formActions,
  h2,
  legend,
  section
} from "../ui.js";

export default function SearchFilters() {
  const { filters, updateFilters, resetFilters } = useRecipes();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section
      id="search"
      aria-label="Recipe search"
      className={`${section} print:hidden`}
    >
      <h2 className={h2}>Find a Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input" className={blockLabel}>Search:</label>
        <input
          type="search"
          id="search-input"
          className={field}
          placeholder="Search recipes, ingredients..."
          value={filters.search}
          onChange={(event) =>
            updateFilters({ search: event.target.value })
          }
        />

        <label htmlFor="category" className={blockLabel}>Category:</label>
        <select
          id="category"
          className={field}
          value={filters.category}
          onChange={(event) =>
            updateFilters({ category: event.target.value })
          }
        >
          <option value="all">All Categories</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
          <option value="snacks">Snacks</option>
        </select>

        <label htmlFor="sort" className={blockLabel}>Sort by:</label>
        <select
          id="sort"
          className={field}
          value={filters.sort}
          onChange={(event) =>
            updateFilters({ sort: event.target.value })
          }
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
          <option value="quickest">Quickest</option>
        </select>

        <fieldset className={fieldset}>
          <legend className={legend}>Max cook time</legend>

          <label className={choiceLabel}>
            <input
              type="radio"
              name="time"
              checked={filters.maxTime === 15}
              onChange={() => updateFilters({ maxTime: 15 })}
            />
            Under 15 min
          </label>

          <label className={choiceLabel}>
            <input
              type="radio"
              name="time"
              checked={filters.maxTime === 30}
              onChange={() => updateFilters({ maxTime: 30 })}
            />
            Under 30 min
          </label>

          <label className={choiceLabel}>
            <input
              type="radio"
              name="time"
              checked={filters.maxTime === 60}
              onChange={() => updateFilters({ maxTime: 60 })}
            />
            Under 1 hour
          </label>

          <label className={choiceLabel}>
            <input
              type="radio"
              name="time"
              checked={filters.maxTime === Infinity}
              onChange={() => updateFilters({ maxTime: Infinity })}
            />
            Any
          </label>
        </fieldset>

        <div className={formActions}>
          <button type="submit" className={btn}>
            Search
          </button>
          <button type="button" className={btn} onClick={resetFilters}>
            Clear
          </button>
        </div>
      </form>
    </section>
  );
}