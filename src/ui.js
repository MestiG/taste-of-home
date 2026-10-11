// Shared Tailwind class strings for elements that repeat across the app.

export const link = "text-primary underline hover:text-primary-dark";

// Buttons
export const btnBase =
  "inline-block text-white rounded-lg px-[1.4rem] py-[0.6rem] text-base font-semibold cursor-pointer transition-[background-color,transform] duration-150 hover:-translate-y-px";
export const btn = `${btnBase} bg-primary hover:bg-primary-dark`;
// Button that sits directly inside a form (not inside .form-actions)
export const formBtn = `${btn} mt-4 mr-2`;
// <Link> styled as a button
export const btnLink =
  "inline-block bg-primary text-white no-underline rounded-lg px-[1.4rem] py-[0.6rem] text-base font-semibold cursor-pointer transition-colors duration-150 hover:bg-primary-dark hover:text-white mt-3";

// Layout
export const container = "w-full max-w-[1200px] mx-auto px-4";
export const section =
  "bg-surface border border-line rounded-xl shadow-card p-6 sm:p-8 my-6 print:border-0 print:shadow-none";
export const h2 =
  "text-[1.4rem] lg:text-[1.7rem] font-bold text-primary mb-4 pb-2 border-b-2 border-line";
export const h3 = "text-[1.17em] font-bold mt-5 mb-2 text-ink";

// Forms
export const blockLabel = "block font-semibold mt-[0.9rem] mb-1";
export const fieldLabel =
  "inline-flex items-center gap-[0.35rem] font-normal my-[0.3rem] mr-[0.6rem]";
export const choiceLabel = `${fieldLabel} cursor-pointer`;
export const field =
  "w-full px-3 py-[0.6rem] border border-line rounded-lg bg-field text-ink placeholder:text-muted/75 focus:outline-3 focus:outline-primary/25 focus:border-primary";
export const fieldset = "border border-line rounded-lg px-4 pt-3 pb-4 mt-4";
export const legend = "font-bold px-[0.4rem] text-muted text-[0.9rem]";
export const formActions = "flex flex-wrap gap-2 mt-4";
export const errorText = "text-primary font-semibold mt-2";

// Misc
export const emptyState =
  "col-span-full text-center py-12 px-4 text-muted border-2 border-dashed border-line rounded-xl";
