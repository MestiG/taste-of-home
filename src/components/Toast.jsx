import { useEffect } from "react";
import { useRecipes } from "../context/RecipeContext.jsx";

const toastColors = {
  success: "bg-success text-white dark:text-[#08130d]",
  error: "bg-primary text-white"
};

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
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-300 max-w-[90vw] text-center px-[1.4rem] py-[0.8rem] rounded-xl shadow-card-lg font-semibold text-[0.95rem] ${
        toastColors[toast.type] ?? "bg-ink text-white dark:bg-surface dark:text-ink"
      }`}
      role="status"
      aria-live="polite"
    >
      {toast.message}
    </div>
  );
}