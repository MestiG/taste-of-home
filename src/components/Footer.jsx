import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            🍲 Taste of Home
          </Link>

          <p>
            Discover delicious recipes, save your favorites,
            and share the food you love with family and friends.
          </p>

          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              ▶
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              X
            </a>
          </div>
        </div>

        <div className="footer-columns">
          <nav className="footer-nav" aria-label="Footer navigation">
            <h3>Explore</h3>

            <ul>
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#recipes" className="footer-link">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/add-recipe" className="footer-link">
                  Add Recipe
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3>Categories</h3>

            <ul className="footer-list">
              <li>
                <Link
                  to="/?category=breakfast#recipes"
                  className="footer-link"
                >
                  Breakfast
                </Link>
              </li>
              <li>
                <Link
                  to="/?category=lunch#recipes"
                  className="footer-link"
                >
                  Lunch
                </Link>
              </li>
              <li>
                <Link
                  to="/?category=dinner#recipes"
                  className="footer-link"
                >
                  Dinner
                </Link>
              </li>
              <li>
                <Link
                  to="/?category=dessert#recipes"
                  className="footer-link"
                >
                  Dessert
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>

            <ul className="footer-list">
              <li>
                <Link to="/login" className="footer-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="footer-link">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Taste of Home. All rights reserved.
        </p>

        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}