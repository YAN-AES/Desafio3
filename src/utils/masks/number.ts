
/**
 * Remove all non-numeric characters from a string.
 */

export function numberMask(value: string) {
  return value.replace(/\D/g, "");
}