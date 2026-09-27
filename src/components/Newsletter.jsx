import { useState } from "react";
import { useRecipes } from "../context/RecipeContext.jsx";

export default function Newsletter() {
  const { showToast } = useRecipes();
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    showToast("📬 Subscribed! Check your inbox to confirm.");
    setEmail("");
  }

  return (
    <section id="newsletter">
      <h2>Get Weekly Recipes 📬</h2>
      <p>
        Join 10,000+ home cooks receiving new recipes every week.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email">Email:</label>
        <input
          type="email"
          id="newsletter-email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}