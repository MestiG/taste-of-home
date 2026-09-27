import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext.jsx";

export default function SignupPage() {
  const { showToast } = useRecipes();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    showToast(`🎉 Account created for ${form.name}!`);
  }

  return (
    <section id="signup">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Create your account</legend>

          <label htmlFor="signup-name">Name:</label>
          <input
            id="signup-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <label htmlFor="signup-email">Email:</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="signup-password">
            Password, minimum 8 characters:
          </label>
          <input
            type="password"
            id="signup-password"
            name="password"
            minLength="8"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <label htmlFor="signup-password-confirm">
            Confirm Password:
          </label>
          <input
            type="password"
            id="signup-password-confirm"
            name="confirmPassword"
            minLength="8"
            value={form.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          {error && <p className="error-text">{error}</p>}

          <label>
            <input type="checkbox" required />
            I agree to the
            {" "}
            <Link to="/faq">Terms of Service</Link>
          </label>

          <button type="submit">Create Account</button>
        </fieldset>
      </form>
    </section>
  );
}