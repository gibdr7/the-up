
export const titleSlug = str =>
str
  .toLowerCase()
  .replace(/[^\w\d\s]+/g, '')
  .replace(/\s+/g, '-')