import { useState } from "react";
import { useRecipes } from "../context/RecipeContext.jsx";
import { blockLabel, field, formBtn, h2, section } from "../ui.js";

export default function Newsletter() {
  const { showToast } = useRecipes();
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    showToast("📬 Subscribed! Check your inbox to confirm.");
    setEmail("");
  }

  return (
    <section id="newsletter" className={`${section} print:hidden`}>
      <h2 className={h2}>Get Weekly Recipes 📬</h2>
      <p>
        Join 10,000+ home cooks receiving new recipes every week.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email" className={blockLabel}>Email:</label>
        <input
          type="email"
          id="newsletter-email"
          className={field}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit" className={formBtn}>
          Subscribe
        </button>
      </form>
    </section>
  );
}