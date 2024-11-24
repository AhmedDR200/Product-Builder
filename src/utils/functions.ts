/**
 * @param {string} text - The text to slice
 * @param {number} [max=50] - The maximum length of the text
 * @returns The sliced text
 */
export const textSlicer = (text: string, max: number = 50) => {
  if (text.length <= max) return text;
  return text.slice(0, max) + "...";
};
