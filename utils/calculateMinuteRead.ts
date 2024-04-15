export function calculateMinuteRead(content: string): number {
  const words = content.split(/\s+/).length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}
