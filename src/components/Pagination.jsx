import { useRecipes } from "../context/RecipeContext.jsx";

export default function Pagination() {
  const { page, setPage, totalPages } = useRecipes();

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Recipe pages">
      <ul>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <li key={pageNumber}>
              <button
                type="button"
                aria-current={pageNumber === page ? "page" : undefined}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        {page < totalPages && (
          <li>
            <button type="button" onClick={() => setPage(page + 1)}>
              Next →
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}