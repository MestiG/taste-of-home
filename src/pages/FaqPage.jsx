import { h2, section } from "../ui.js";

const details =
  "border border-line rounded-lg px-4 py-3 my-[0.6rem] bg-surface open:[&>summary]:mb-2";
const summary = "font-bold cursor-pointer text-primary";

export default function FaqPage() {
  return (
    <section id="faq" className={`${section} print:hidden`}>
      <h2 className={h2}>Frequently Asked Questions</h2>

      <details className={details}>
        <summary className={summary}>Is Taste of Home free to use?</summary>
        <p>
          Yes. Browsing, saving, and sharing recipes is free.
        </p>
      </details>

      <details className={details}>
        <summary className={summary}>How do I submit my own recipe?</summary>
        <p>
          Use the Add Recipe page. Your recipe will be stored
          locally in your browser for this React demo.
        </p>
      </details>

      <details className={details}>
        <summary className={summary}>Can I save recipes for later?</summary>
        <p>
          Yes. Open a recipe and select Save. The recipe will be
          saved in your browser's local storage.
        </p>
      </details>
    </section>
  );
}