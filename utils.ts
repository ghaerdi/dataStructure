export function normalize(s: string): string {
  return s.replace(/[\.\,\?\!]/g, '').toLowerCase()
}

export const random = (limit: number) => Math.floor(Math.random() * limit)