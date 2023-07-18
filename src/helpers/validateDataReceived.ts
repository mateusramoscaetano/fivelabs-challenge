export function isCpfOrCnpj(value: string) {
  const strippedValue = value.replace(/\D/g, "");

  if (strippedValue.length === 11) {
    return true;
  } else if (strippedValue.length === 14) {
    return false;
  } else {
    return true;
  }
}

export function isNumber11(value: string) {
  const strippedValue = value.replace(/\D/g, "");

  if (strippedValue.length === 11) {
    return true;
  } else if (strippedValue.length === 10) {
    return false;
  } else {
    return true;
  }
}
