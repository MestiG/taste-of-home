export default function FaqPage() {
  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>

      <details>
        <summary>Is Taste of Home free to use?</summary>
        <p>
          Yes. Browsing, saving, and sharing recipes is free.
        </p>
      </details>

      <details>
        <summary>How do I submit my own recipe?</summary>
        <p>
          Use the Add Recipe page. Your recipe will be stored
          locally in your browser for this React demo.
        </p>
      </details>

      <details>
        <summary>Can I save recipes for later?</summary>
        <p>
          Yes. Open a recipe and select Save. The recipe will be
          saved in your browser's local storage.
        </p>
      </details>
    </section>
  );
}