import { useRecipes } from "../context/RecipeContext.jsx";

const pageBtn =
  "inline-block min-w-[2.2rem] text-center px-[0.6rem] py-[0.35rem] border border-line rounded-lg bg-surface text-primary dark:text-ink cursor-pointer transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-primary hover:text-white hover:border-primary aria-[current=page]:bg-primary aria-[current=page]:text-white aria-[current=page]:border-primary";

export default function Pagination() {
  const { page, setPage, totalPages } = useRecipes();

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Recipe pages" className="print:hidden">
      <ul className="list-none p-0 flex gap-[0.4rem] mt-6 justify-center">
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <li key={pageNumber}>
              <button
                type="button"
                className={pageBtn}
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
            <button
              type="button"
              className={pageBtn}
              onClick={() => setPage(page + 1)}
            >
              Next →
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}