import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecipes } from "../context/RecipeContext.jsx";
import {
  choiceLabel,
  errorText,
  fieldLabel,
  field,
  fieldset,
  formBtn,
  h2,
  legend,
  link,
  section
} from "../ui.js";

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
    <section id="signup" className={`${section} print:hidden`}>
      <h2 className={h2}>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <fieldset className={fieldset}>
          <legend className={legend}>Create your account</legend>

          <label htmlFor="signup-name" className={fieldLabel}>Name:</label>
          <input
            id="signup-name"
            className={field}
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />

          <label htmlFor="signup-email" className={fieldLabel}>Email:</label>
          <input
            type="email"
            id="signup-email"
            className={field}
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="signup-password" className={fieldLabel}>
            Password, minimum 8 characters:
          </label>
          <input
            type="password"
            id="signup-password"
            className={field}
            name="password"
            minLength="8"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <label htmlFor="signup-password-confirm" className={fieldLabel}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="signup-password-confirm"
            className={field}
            name="confirmPassword"
            minLength="8"
            value={form.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          {error && <p className={errorText}>{error}</p>}

          <label className={choiceLabel}>
            <input type="checkbox" required className="accent-primary" />
            I agree to the
            {" "}
            <Link to="/faq" className={link}>Terms of Service</Link>
          </label>

          <button type="submit" className={formBtn}>
            Create Account
          </button>
        </fieldset>
      </form>
    </section>
  );
}