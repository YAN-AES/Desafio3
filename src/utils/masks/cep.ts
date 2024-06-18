export function cepMask(value: string) {
  return value.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2');
}

/**
 * Remove all non-numeric characters from the cep
 */

export function cepUnmask(value: string) {
  return value.replace(/\D/g, '');
}