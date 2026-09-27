import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext.jsx";
import SearchFilters from "../components/SearchFilters.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
//import Pagination from "../components/Pagination.jsx";
import Newsletter from "../components/Newsletter.jsx";
import {  stars } from "../utils/format.js";
import recipes from "../data/recipes.js";

export default function HomePage() {
  const {
    filteredRecipes,
    
    updateFilters,
    page,
    PER_PAGE
  } = useRecipes();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const changes = {};

    if (category) changes.category = category;
    if (search !== null) changes.search = search;

    if (Object.keys(changes).length > 0) {
      updateFilters(changes);
    }
  }, [searchParams, updateFilters]);

  const featuredRecipe = recipes[0];
  const start = (page - 1) * PER_PAGE;
  const visibleRecipes = filteredRecipes.slice(start, start + PER_PAGE);

  return (
    <>
      <section id="home">
        <h2>Recipe of the Day</h2>

        <article className="featured-recipe">
          <div>
            <h3>{featuredRecipe.title}</h3>

            <ul>
              <li>⏱ Prep: 30 min</li>
              <li>🔥 Cook: 2 hrs</li>
              <li>🍽 Serves: 6</li>
              <li>📊 Difficulty: {featuredRecipe.difficulty}</li>
            </ul>

            <p>
              Rating: {stars(featuredRecipe.rating)}
              {" "}
              ({featuredRecipe.reviews} reviews)
            </p>

            <Link
              to={`/recipe/${featuredRecipe.id}`}
              className="button"
            >
              View Full Recipe →
            </Link>
          </div>

          <figure>
            <img
              src={featuredRecipe.img}
              alt={featuredRecipe.alt}
            />
            <figcaption>
              Spicy berbere chicken stew, slow-cooked for hours
            </figcaption>
          </figure>
        </article>
      </section>

      <SearchFilters />

      <section id="categories">
        <h2>Browse by Category</h2>

        <ul>
          <li>
            <Link to="/?category=breakfast#recipes">
              🍳 Breakfast
            </Link>
          </li>
          <li>
            <Link to="/?category=lunch#recipes">
              🥗 Lunch
            </Link>
          </li>
          <li>
            <Link to="/?category=dinner#recipes">
              🍽 Dinner
            </Link>
          </li>
          <li>
            <Link to="/?category=dessert#recipes">
              🍰 Dessert
            </Link>
          </li>
          <li>
            <Link to="/?category=snacks#recipes">
              🍿 Snacks
            </Link>
          </li>
        </ul>
      </section>

      <section id="recipes">
        <h2>All Recipes</h2>

        <p className="muted">
          Showing {visibleRecipes.length} of {filteredRecipes.length}
          {" "}
          recipe{filteredRecipes.length !== 1 ? "s" : ""}
        </p>

        <div className="recipe-grid">
          {visibleRecipes.length > 0 ? (
            visibleRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className="empty-state">
              😕 No recipes found. Try a different search.
            </p>
          )}
        </div>

        
      </section>

      <Newsletter />
    </>
  );
}