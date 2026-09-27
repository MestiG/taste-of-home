import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <h1>
        <Link to="/" onClick={closeMenu}>
          🍲 Taste of Home
        </Link>
      </h1>

      <p>Discover, share &amp; save your favorite recipes</p>

      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={
          theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
      >
        <span aria-hidden="true">
          {theme === "dark" ? "☀️" : "🌙"}
        </span>
      </button>

      <button
        type="button"
        className="nav-toggle-label"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "× Close" : "☰ Menu"}
      </button>

      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={menuOpen ? "nav-open" : ""}
      >
        <ul>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <Link to="/#categories" onClick={closeMenu}>
              Categories
            </Link>
          </li>

          <li>
            <Link to="/#recipes" onClick={closeMenu}>
              Recipes
            </Link>
          </li>

          <li>
            <NavLink to="/add-recipe" onClick={closeMenu}>
              Add Recipe
            </NavLink>
          </li>

          <li>
            <NavLink to="/faq" onClick={closeMenu}>
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" onClick={closeMenu}>
              Login
            </NavLink>
          </li>

          <li>
            <NavLink to="/signup" onClick={closeMenu}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}