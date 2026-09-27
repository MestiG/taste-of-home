import { useRecipes } from "../context/RecipeContext.jsx";

export default function SearchFilters() {
  const { filters, updateFilters, resetFilters } = useRecipes();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section id="search" aria-label="Recipe search">
      <h2>Find a Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search:</label>
        <input
          type="search"
          id="search-input"
          placeholder="Search recipes, ingredients..."
          value={filters.search}
          onChange={(event) =>
            updateFilters({ search: event.target.value })
          }
        />

        <label htmlFor="category">Category:</label>
        <select
          id="category"
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

        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
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

        <fieldset>
          <legend>Max cook time</legend>

          <label>
            <input
              type="radio"
              name="time"
              checked={filters.maxTime === 15}
              onChange={() => updateFilters({ maxTime: 15 })}
            />
            Under 15 min
          </label>

          <label>
            <input
              type="radio"
              name="time"
              checked={filters.maxTime === 30}
              onChange={() => updateFilters({ maxTime: 30 })}
            />
            Under 30 min
          </label>

          <label>
            <input
              type="radio"
              name="time"
              checked={filters.maxTime === 60}
              onChange={() => updateFilters({ maxTime: 60 })}
            />
            Under 1 hour
          </label>

          <label>
            <input
              type="radio"
              name="time"
              checked={filters.maxTime === Infinity}
              onChange={() => updateFilters({ maxTime: Infinity })}
            />
            Any
          </label>
        </fieldset>

        <div className="form-actions">
          <button type="submit">Search</button>
          <button type="button" onClick={resetFilters}>
            Clear
          </button>
        </div>
      </form>
    </section>
  );
}