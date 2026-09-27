import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext.jsx";

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
    <section id="login">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Welcome back</legend>

          <label htmlFor="login-email">Email:</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="login-password">Password:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />

          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <button type="submit">Login</button>

          <p>
            <Link to="/faq">Forgot your password?</Link>
            {" · "}
            <Link to="/signup">
              Don't have an account? Sign up
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}