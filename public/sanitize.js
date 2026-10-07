// Treat all values read from Realtime Database as untrusted display text.
export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[character]);
}

export const escapeAttribute = escapeHtml;

export function safeImageUrl(value) {
  try {
    const url = new URL(String(value ?? ""), window.location.origin);
    return (url.protocol === "https:" || url.protocol === "http:")
      ? escapeAttribute(url.href)
      : "https://placehold.co/500x500?text=No+image";
  } catch {
    return "https://placehold.co/500x500?text=No+image";
  }
}
