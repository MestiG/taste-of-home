import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext.jsx";
import { fileToDataUrl } from "../utils/format.js";

const initialForm = {
  title: "",
  description: "",
  category: "",
  cuisine: "",
  tags: "",
  prepTime: "",
  cookTime: "",
  servings: "",
  difficulty: "easy",
  ingredients: "",
  instructions: ""
};

export default function AddRecipePage() {
  const { addRecipe, showToast } = useRecipes();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const ingredients = form.ingredients
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    const steps = form.instructions
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

    if (ingredients.length === 0 || steps.length === 0) {
      setError("Add at least one ingredient and one instruction.");
      return;
    }

    const image = photo
      ? await fileToDataUrl(photo)
      : "/images/recipe-placeholder.svg";

    const newRecipe = {
      id: Date.now(),
      title: form.title.trim(),
      desc: form.description.trim(),
      category: form.category,
      cuisine: form.cuisine.trim() || "International",
      time: Number(form.prepTime) + Number(form.cookTime),
      rating: 0,
      reviews: 0,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean),
      img: image,
      alt: form.title.trim(),
      difficulty: capitalize(form.difficulty),
      servings: Number(form.servings),
      ingredients,
      steps
    };

    addRecipe(newRecipe);
    showToast(`🎉 "${newRecipe.title}" was added!`);
    navigate("/");
  }

  return (
    <section id="add-recipe">
      <h2>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Basic Info</legend>

          <label htmlFor="title">Recipe Title:</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Short Description:</label>
          <textarea
            id="description"
            name="description"
            rows="2"
            maxLength="200"
            value={form.description}
            onChange={handleChange}
            required
          />

          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Choose...</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
            <option value="snacks">Snacks</option>
          </select>

          <label htmlFor="cuisine">Cuisine:</label>
          <input
            id="cuisine"
            name="cuisine"
            placeholder="e.g. Ethiopian"
            value={form.cuisine}
            onChange={handleChange}
          />

          <label htmlFor="tags">Tags:</label>
          <input
            id="tags"
            name="tags"
            placeholder="spicy, quick, vegan"
            value={form.tags}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Timing &amp; Servings</legend>

          <label htmlFor="prepTime">Prep Time (minutes):</label>
          <input
            type="number"
            id="prepTime"
            name="prepTime"
            min="0"
            value={form.prepTime}
            onChange={handleChange}
            required
          />

          <label htmlFor="cookTime">Cook Time (minutes):</label>
          <input
            type="number"
            id="cookTime"
            name="cookTime"
            min="0"
            value={form.cookTime}
            onChange={handleChange}
            required
          />

          <label htmlFor="servings">Servings:</label>
          <input
            type="number"
            id="servings"
            name="servings"
            min="1"
            max="100"
            value={form.servings}
            onChange={handleChange}
            required
          />

          <fieldset>
            <legend>Difficulty</legend>

            <label>
              <input
                type="radio"
                name="difficulty"
                value="easy"
                checked={form.difficulty === "easy"}
                onChange={handleChange}
              />
              Easy
            </label>

            <label>
              <input
                type="radio"
                name="difficulty"
                value="medium"
                checked={form.difficulty === "medium"}
                onChange={handleChange}
              />
              Medium
            </label>

            <label>
              <input
                type="radio"
                name="difficulty"
                value="hard"
                checked={form.difficulty === "hard"}
                onChange={handleChange}
              />
              Hard
            </label>
          </fieldset>
        </fieldset>

        <fieldset>
          <legend>Content</legend>

          <label htmlFor="ingredients">
            Ingredients, one per line:
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="6"
            value={form.ingredients}
            onChange={handleChange}
            required
          />

          <label htmlFor="instructions">
            Instructions, one step per line:
          </label>
          <textarea
            id="instructions"
            name="instructions"
            rows="8"
            value={form.instructions}
            onChange={handleChange}
            required
          />

          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(event) => setPhoto(event.target.files[0])}
          />
        </fieldset>

        {error && <p className="error-text">{error}</p>}

        <div className="form-actions">
          <button type="submit">Submit Recipe</button>
          <button
            type="button"
            onClick={() => setForm(initialForm)}
          >
            Clear Form
          </button>
        </div>
      </form>
    </section>
  );
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}