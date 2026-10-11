import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext.jsx";
import {
  choiceLabel,
  fieldLabel,
  field,
  fieldset,
  formBtn,
  h2,
  legend,
  link,
  section
} from "../ui.js";

export default function LoginPage() {
  const { showToast } = useRecipes();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const username = email.split("@")[0];
    showToast(`👋 Welcome back, ${username}!`);
  }

  return (
    <section id="login" className={`${section} print:hidden`}>
      <h2 className={h2}>Login</h2>

      <form onSubmit={handleSubmit}>
        <fieldset className={fieldset}>
          <legend className={legend}>Welcome back</legend>

          <label htmlFor="login-email" className={fieldLabel}>Email:</label>
          <input
            type="email"
            id="login-email"
            className={field}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="login-password" className={fieldLabel}>Password:</label>
          <input
            type="password"
            id="login-password"
            className={field}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />

          <label className={choiceLabel}>
            <input type="checkbox" className="accent-primary" />
            Remember me
          </label>

          <button type="submit" className={formBtn}>
            Login
          </button>

          <p>
            <Link to="/faq" className={link}>Forgot your password?</Link>
            {" · "}
            <Link to="/signup" className={link}>
              Don't have an account? Sign up
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}