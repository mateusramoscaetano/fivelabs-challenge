interface Props {
  value: string;
  isCpf: boolean;
}

export function applyMask({ value, isCpf }: Props) {
  if (isCpf) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  } else {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }
}

export function applyNumberMask(value: string, isNumber11: boolean) {
  if (isNumber11) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, `($1) $2 $3-$4`);
  } else {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{4})(\d{4})/, `($1) $2-$3`);
  }
}

export function applyMaskDate(value: string) {
  return value.replace(/\D/g, "").replace(/(\d{2})(\d{2})/, "$1/$2");
}

export function applyMaskCreditCard(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}
