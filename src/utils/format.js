export function stars(rating) {
  if (!rating) return "Not yet rated";
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

export function formatTime(minutes) {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${hours} hr${hours > 1 ? "s" : ""}${
    mins ? ` ${mins} min` : ""
  }`;
}

export function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}