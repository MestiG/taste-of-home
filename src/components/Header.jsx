import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

const navLink =
  "block no-underline text-ink font-semibold px-3 py-[0.55rem] rounded-lg hover:bg-primary hover:text-white aria-[current=page]:bg-primary aria-[current=page]:text-white lg:px-[0.9rem] lg:py-[0.45rem]";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-100 w-full max-w-[1200px] mx-auto px-4 pt-4 bg-header backdrop-blur-sm border-b border-line print:hidden">
      <h1 className="text-[1.6rem] font-bold text-primary">
        <Link to="/" onClick={closeMenu} className="no-underline hover:text-primary-dark">
          🍲 Taste of Home
        </Link>
      </h1>

      <p className="text-muted text-[0.9rem] mb-2">
        Discover, share &amp; save your favorite recipes
      </p>

      <button
        type="button"
        className="absolute top-[0.85rem] right-[4.7rem] lg:top-4 lg:right-4 size-[2.7rem] inline-flex items-center justify-center p-0 bg-surface text-ink border border-line rounded-full shadow-card text-[1.15rem] cursor-pointer transition-[background-color,border-color,color,transform] duration-150 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-0.5"
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
        className="absolute top-[0.85rem] right-4 py-2 text-base font-semibold text-primary cursor-pointer select-none lg:hidden"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "× Close" : "☰ Menu"}
      </button>

      <nav id="main-navigation" aria-label="Main navigation" className="print:hidden">
        <ul
          className={`${menuOpen ? "flex" : "hidden"} list-none p-0 flex-col gap-1 pb-3 lg:flex lg:flex-row lg:gap-[0.4rem]`}
        >
          <li>
            <NavLink to="/" end onClick={closeMenu} className={navLink}>
              Home
            </NavLink>
          </li>

          <li>
            <Link to="/#categories" onClick={closeMenu} className={navLink}>
              Categories
            </Link>
          </li>

          <li>
            <Link to="/#recipes" onClick={closeMenu} className={navLink}>
              Recipes
            </Link>
          </li>

          <li>
            <NavLink to="/add-recipe" onClick={closeMenu} className={navLink}>
              Add Recipe
            </NavLink>
          </li>

          <li>
            <NavLink to="/faq" onClick={closeMenu} className={navLink}>
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" onClick={closeMenu} className={navLink}>
              Login
            </NavLink>
          </li>

          <li>
            <NavLink to="/signup" onClick={closeMenu} className={navLink}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}