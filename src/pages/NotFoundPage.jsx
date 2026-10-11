import { Link } from "react-router-dom";
import { btnLink, h2 } from "../ui.js";

export default function NotFoundPage() {
  return (
    <section className="bg-surface shadow-card my-6 text-center py-12 px-4 text-muted border-2 border-dashed border-line rounded-xl">
      <h2 className={h2}>404 — Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/" className={btnLink}>
        Return Home
      </Link>
    </section>
  );
}