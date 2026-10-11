import { Link } from "react-router-dom";

const footerLink =
  "relative inline-block text-muted no-underline transition-colors duration-200 hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-[3px] after:w-0 after:h-0.5 after:bg-accent after:transition-[width] after:duration-200 hover:after:w-full";
const footerHeading = "mb-4 text-primary text-base font-bold uppercase tracking-[0.08em]";
const footerList = "list-none p-0 grid gap-[0.65rem]";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <footer className="w-full mt-12 pt-12 px-6 pb-6 bg-page text-ink border-t border-line text-left text-[0.9rem] shadow-[0_-4px_20px_rgba(45,52,54,0.06)] print:hidden">
      <div className="w-full max-w-[1200px] mx-auto grid gap-10 lg:grid-cols-[1.1fr_2fr] lg:gap-16">
        <div className="max-w-[380px]">
          <Link to="/" className="inline-block text-primary text-2xl font-extrabold no-underline mb-4 hover:text-primary-dark">
            🍲 Taste of Home
          </Link>

          <p className="text-muted leading-[1.7] mb-5">
            Discover delicious recipes, save your favorites,
            and share the food you love with family and friends.
          </p>

          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="size-[2.4rem] inline-flex items-center justify-center bg-surface border border-line rounded-full text-primary font-bold no-underline transition-[background-color,border-color,color,transform] duration-200 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-[3px]"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="size-[2.4rem] inline-flex items-center justify-center bg-surface border border-line rounded-full text-primary font-bold no-underline transition-[background-color,border-color,color,transform] duration-200 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-[3px]"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="size-[2.4rem] inline-flex items-center justify-center bg-surface border border-line rounded-full text-primary font-bold no-underline transition-[background-color,border-color,color,transform] duration-200 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-[3px]"
              aria-label="YouTube"
            >
              ▶
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="size-[2.4rem] inline-flex items-center justify-center bg-surface border border-line rounded-full text-primary font-bold no-underline transition-[background-color,border-color,color,transform] duration-200 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-[3px]"
              aria-label="X"
            >
              X
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <nav aria-label="Footer navigation">
            <h3 className={footerHeading}>Explore</h3>

            <ul className={footerList}>
              <li>
                <Link to="/" className={footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#recipes" className={footerLink}>
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/add-recipe" className={footerLink}>
                  Add Recipe
                </Link>
              </li>
              <li>
                <Link to="/faq" className={footerLink}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className={footerHeading}>Categories</h3>

            <ul className={footerList}>
              <li>
                <Link
                  to="/?category=breakfast#recipes"
                  className={footerLink}
                >
                  Breakfast
                </Link>
              </li>
              <li>
                <Link
                  to="/?category=lunch#recipes"
                  className={footerLink}
                >
                  Lunch
                </Link>
              </li>
              <li>
                <Link
                  to="/?category=dinner#recipes"
                  className={footerLink}
                >
                  Dinner
                </Link>
              </li>
              <li>
                <Link
                  to="/?category=dessert#recipes"
                  className={footerLink}
                >
                  Dessert
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={footerHeading}>Support</h3>

            <ul className={footerList}>
              <li>
                <Link to="/login" className={footerLink}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className={footerLink}>
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/faq" className={footerLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className={footerLink}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mt-10 mx-auto pt-5 border-t border-line flex flex-col items-center justify-between gap-4 text-muted text-[0.92rem] md:flex-row">
        <p>
          © {currentYear} Taste of Home. All rights reserved.
        </p>

        <button
          type="button"
          className="bg-primary text-white rounded-full px-[1.1rem] py-[0.65rem] text-base font-bold cursor-pointer transition-[background-color,transform] duration-200 hover:bg-primary-dark hover:-translate-y-0.5"
          onClick={scrollToTop}
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}