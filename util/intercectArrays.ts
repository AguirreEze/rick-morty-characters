export default function intersectArrays(a: string[], b: string[]): string[] {
  return a.filter((value) => b.includes(value));
}
