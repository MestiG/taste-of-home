import { Fragment, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext.jsx";
import { capitalize, formatTime, stars } from "../utils/format.js";

function createBaseReviews(recipe) {
  if (!recipe || recipe.reviews === 0) {
    return [];
  }

  return [
    {
      id: `${recipe.id}-base-1`,
      name: "User1",
      text: "Great recipe, easy to follow!",
      rating: Math.min(5, recipe.rating + 1),
      date: "August 14, 2026"
    },
    {
      id: `${recipe.id}-base-2`,
      name: "User2",
      text: "My family loved this.",
      rating: recipe.rating,
      date: "August 2, 2026"
    }
  ];
}

export default function RecipeDetailPage() {
  const { id } = useParams();

  const {
    allRecipes,
    favorites,
    toggleFavorite,
    showToast
  } = useRecipes();

  const recipe = allRecipes.find(
    (item) => item.id === Number(id)
  );

  const baseReviews = useMemo(() => {
    return createBaseReviews(recipe);
  }, [recipe]);

  const [submittedReviewState, setSubmittedReviewState] = useState({
    recipeId: null,
    reviews: []
  });

  const submittedReviews =
    recipe && submittedReviewState.recipeId === recipe.id
      ? submittedReviewState.reviews
      : [];

  const reviews = useMemo(() => {
    return [...submittedReviews, ...baseReviews];
  }, [submittedReviews, baseReviews]);

  if (!recipe) {
    return (
      <section>
        <h2>Recipe not found</h2>
        <p>The recipe you requested does not exist.</p>

        <Link to="/" className="button">
          Back to Recipes
        </Link>
      </section>
    );
  }

  const saved = favorites.includes(recipe.id);

  function handleFavorite() {
    toggleFavorite(recipe.id);

    showToast(
      saved
        ? `Removed "${recipe.title}" from favorites`
        : `♥ Saved "${recipe.title}" to favorites!`
    );
  }

  function handleReviewSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name").trim();
    const rating = Number(formData.get("rating"));
    const comment = formData.get("comment").trim();

    if (!name || !rating || !comment) {
      showToast("Please fill in all review fields", "error");
      return;
    }

    const newReview = {
      id: `${recipe.id}-${Date.now()}`,
      name,
      text: comment,
      rating,
      date: new Date().toLocaleDateString()
    };

    setSubmittedReviewState((current) => ({
      recipeId: recipe.id,
      reviews: [
        newReview,
        ...(current.recipeId === recipe.id ? current.reviews : [])
      ]
    }));

    event.target.reset();
    showToast("Thanks! Your review was posted.");
  }

  return (
    <section id="recipe-detail">
      <Fragment key={recipe.id}>
        <nav aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/#categories">Categories</Link>
            </li>

            <li>
              <Link to={`/?category=${recipe.category}#recipes`}>
                {capitalize(recipe.category)}
              </Link>
            </li>

            <li aria-current="page">{recipe.title}</li>
          </ol>
        </nav>

        <h2>{recipe.title}</h2>

        <figure className="detail-image">
          <img
            src={recipe.img}
            alt={recipe.alt || recipe.title}
          />
          <figcaption>{recipe.desc}</figcaption>
        </figure>

        <table>
          <caption>Recipe Information</caption>

          <tbody>
            <tr>
              <th scope="row">Prep Time</th>
              <td>
                {formatTime(Math.round(recipe.time * 0.2))}
              </td>
            </tr>

            <tr>
              <th scope="row">Cook Time</th>
              <td>
                {formatTime(Math.round(recipe.time * 0.8))}
              </td>
            </tr>

            <tr>
              <th scope="row">Total Time</th>
              <td>{formatTime(recipe.time)}</td>
            </tr>

            <tr>
              <th scope="row">Servings</th>
              <td>{recipe.servings || "—"}</td>
            </tr>

            <tr>
              <th scope="row">Difficulty</th>
              <td>{recipe.difficulty || "—"}</td>
            </tr>

            <tr>
              <th scope="row">Cuisine</th>
              <td>{recipe.cuisine || "—"}</td>
            </tr>

            <tr>
              <th scope="row">Reviews</th>
              <td>{recipe.reviews + submittedReviews.length}</td>
            </tr>
          </tbody>
        </table>

        <p>
          Rating:
          {" "}
          <meter
            value={recipe.rating}
            min="0"
            max="5"
          >
            {recipe.rating} out of 5
          </meter>
          {" "}
          {stars(recipe.rating)}
        </p>

        <div className="action-row">
          <a href="#reviews">Read reviews</a>
          <span>·</span>

          <button
            type="button"
            onClick={() => window.print()}
          >
            🖨 Print Recipe
          </button>

          <button
            type="button"
            onClick={handleFavorite}
            className={saved ? "saved" : ""}
          >
            {saved ? "♥ Saved" : "✎ Save"}
          </button>
        </div>

        <h3>Ingredients</h3>
        <p>Check off what you have:</p>

        <ul className="ingredients">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={`${recipe.id}-ingredient-${index}`}>
              <label>
                <input
                  type="checkbox"
                  name={`ingredient-${index}`}
                />
                <span>{ingredient}</span>
              </label>
            </li>
          ))}
        </ul>

        <h3>Instructions</h3>

        <ol>
          {recipe.steps.map((step, index) => (
            <li key={`${recipe.id}-step-${index}`}>
              {step}
            </li>
          ))}
        </ol>

        <h3>Tips &amp; Tricks</h3>

        <aside>
          <p>
            💡 Taste and adjust the seasoning before serving.
          </p>
        </aside>

        <h3 id="reviews">Ratings &amp; Reviews</h3>

        {reviews.length > 0 ? (
          reviews.map((review) => (
            <article
              className="review"
              key={review.id}
            >
              <p>
                <strong>{review.name}:</strong>
                {" "}
                {review.text}
                <time>{review.date}</time>
              </p>

              <p>
                Rating: {stars(review.rating)}
              </p>
            </article>
          ))
        ) : (
          <p className="empty-state">
            Be the first to review this recipe!
          </p>
        )}

        <form onSubmit={handleReviewSubmit}>
          <fieldset>
            <legend>Write a Review</legend>

            <label htmlFor="review-name">Name:</label>
            <input
              type="text"
              id="review-name"
              name="name"
              autoComplete="name"
              required
            />

            <label htmlFor="review-rating">Rating:</label>
            <select
              id="review-rating"
              name="rating"
              required
            >
              <option value="">Choose a rating</option>
              <option value="5">★★★★★</option>
              <option value="4">★★★★☆</option>
              <option value="3">★★★☆☆</option>
              <option value="2">★★☆☆☆</option>
              <option value="1">★☆☆☆☆</option>
            </select>

            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              required
            />

            <div className="form-actions">
              <button type="submit">Submit Review</button>
            </div>
          </fieldset>
        </form>
      </Fragment>
    </section>
  );
}