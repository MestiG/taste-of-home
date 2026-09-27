import { Link } from "react-router-dom";
import { capitalize, formatTime, stars } from "../utils/format.js";

export default function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card">
      <figure>
        <img src={recipe.img} alt={recipe.alt || recipe.title} />
      </figure>

      <h3>{recipe.title}</h3>
      <p>{recipe.desc}</p>

      <ul>
        <li>Category: {capitalize(recipe.category)}</li>
        <li>⏱ {formatTime(recipe.time)}</li>
        <li>
          Rating: {stars(recipe.rating)} ({recipe.reviews})
        </li>
      </ul>

      <p className="tags">
        Tags:
        {recipe.tags.map((tag) => (
          <Link
            key={tag}
            to={`/?search=${encodeURIComponent(tag)}#recipes`}
            className="tag"
          >
            #{tag}
          </Link>
        ))}
      </p>

      <Link to={`/recipe/${recipe.id}`} className="view-recipe">
        View Recipe →
      </Link>
    </article>
  );
}