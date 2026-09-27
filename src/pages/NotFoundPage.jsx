import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="empty-state">
      <h2>404 — Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="button">
        Return Home
      </Link>
    </section>
  );
}