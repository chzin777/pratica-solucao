export type ClassValue = string | number | false | null | undefined;

/** Junta classes condicionais, ignorando valores falsy. */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
