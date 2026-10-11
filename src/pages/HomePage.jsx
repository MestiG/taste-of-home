import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext.jsx";
import SearchFilters from "../components/SearchFilters.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
//import Pagination from "../components/Pagination.jsx";
import Newsletter from "../components/Newsletter.jsx";
import {  stars } from "../utils/format.js";
import recipes from "../data/recipes.js";
import { btnLink, emptyState, h2, h3, section } from "../ui.js";

const chip =
  "bg-page border border-line rounded-full px-[0.9rem] py-[0.3rem] text-[0.9rem]";
const categoryLink =
  "block text-center no-underline bg-page border border-line rounded-xl py-4 px-2 font-semibold text-ink transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-[3px] hover:shadow-card-lg hover:border-primary";

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
      <section id="home" className={section}>
        <h2 className={h2}>Recipe of the Day</h2>

        <article className="grid gap-4 sm:grid-cols-2 sm:items-center">
          <div>
            <h3 className={h3}>{featuredRecipe.title}</h3>

            <ul className="list-none p-0 flex flex-wrap gap-2">
              <li className={chip}>⏱ Prep: 30 min</li>
              <li className={chip}>🔥 Cook: 2 hrs</li>
              <li className={chip}>🍽 Serves: 6</li>
              <li className={chip}>
                📊 Difficulty: {featuredRecipe.difficulty}
              </li>
            </ul>

            <p>
              Rating: {stars(featuredRecipe.rating)}
              {" "}
              ({featuredRecipe.reviews} reviews)
            </p>

            <Link
              to={`/recipe/${featuredRecipe.id}`}
              className={btnLink}
            >
              View Full Recipe →
            </Link>
          </div>

          <figure>
            <img
              src={featuredRecipe.img}
              alt={featuredRecipe.alt}
              className="w-full max-h-[420px] object-cover rounded-xl shadow-card-lg"
            />
            <figcaption className="text-muted text-[0.9rem] mt-[0.4rem]">
              Spicy berbere chicken stew, slow-cooked for hours
            </figcaption>
          </figure>
        </article>
      </section>

      <SearchFilters />

      <section id="categories" className={section}>
        <h2 className={h2}>Browse by Category</h2>

        <ul className="list-none p-0 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
          <li>
            <Link to="/?category=breakfast#recipes" className={categoryLink}>
              🍳 Breakfast
            </Link>
          </li>
          <li>
            <Link to="/?category=lunch#recipes" className={categoryLink}>
              🥗 Lunch
            </Link>
          </li>
          <li>
            <Link to="/?category=dinner#recipes" className={categoryLink}>
              🍽 Dinner
            </Link>
          </li>
          <li>
            <Link to="/?category=dessert#recipes" className={categoryLink}>
              🍰 Dessert
            </Link>
          </li>
          <li>
            <Link to="/?category=snacks#recipes" className={categoryLink}>
              🍿 Snacks
            </Link>
          </li>
        </ul>
      </section>

      <section id="recipes" className={section}>
        <h2 className={h2}>All Recipes</h2>

        <p className="text-muted text-[0.9rem] mb-4">
          Showing {visibleRecipes.length} of {filteredRecipes.length}
          {" "}
          recipe{filteredRecipes.length !== 1 ? "s" : ""}
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleRecipes.length > 0 ? (
            visibleRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className={emptyState}>
              😕 No recipes found. Try a different search.
            </p>
          )}
        </div>

        
      </section>

      <Newsletter />
    </>
  );
}