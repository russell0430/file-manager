export const inBrowser = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
)
// check if support native lazy-load

export const supportNativeLazyLoading = "loading" in HTMLImageElement.prototype

