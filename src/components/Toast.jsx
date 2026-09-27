import { useEffect } from "react";
import { useRecipes } from "../context/RecipeContext.jsx";

export default function Toast() {
  const { toast, setToast } = useRecipes();

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 3200);

    return () => clearTimeout(timer);
  }, [toast, setToast]);

  if (!toast) return null;

  return (
    <div
      className={`toast toast-${toast.type} show`}
      role="status"
      aria-live="polite"
    >
      {toast.message}
    </div>
  );
}