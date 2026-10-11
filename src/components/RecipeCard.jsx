import { Link } from "react-router-dom";
import { capitalize, formatTime, stars } from "../utils/format.js";

export default function RecipeCard({ recipe }) {
  return (
    <article className="flex flex-col overflow-hidden bg-surface border border-line rounded-xl transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-card-lg">
      <figure>
        <img
          src={recipe.img}
          alt={recipe.alt || recipe.title}
          className="w-full aspect-[16/10] object-cover"
        />
      </figure>

      <h3 className="text-[1.17em] font-bold text-ink mt-4 mx-4 mb-1">{recipe.title}</h3>
      <p className="my-1 mx-4">{recipe.desc}</p>

      <ul className="list-none p-0 my-2 mx-4 flex flex-wrap gap-3 text-[0.88rem] text-muted">
        <li>Category: {capitalize(recipe.category)}</li>
        <li>⏱ {formatTime(recipe.time)}</li>
        <li className="text-gold font-semibold">
          Rating: {stars(recipe.rating)} ({recipe.reviews})
        </li>
      </ul>

      <p className="my-1 mx-4 text-[0.85rem]">
        Tags:
        {recipe.tags.map((tag) => (
          <Link
            key={tag}
            to={`/?search=${encodeURIComponent(tag)}#recipes`}
            className="ml-[0.35rem] text-[0.85rem] text-primary hover:text-primary-dark hover:underline"
          >
            #{tag}
          </Link>
        ))}
      </p>

      <Link to={`/recipe/${recipe.id}`} className="mt-3 mx-4 mb-4 font-bold text-primary no-underline hover:text-primary-dark">
        View Recipe →
      </Link>
    </article>
  );
}