export function normalize(s: string): string {
  return s.replace(/[\.\,\?\!]/g, '').toLowerCase()
}