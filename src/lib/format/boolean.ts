export function formatNullableBoolean(value: boolean | null | undefined) {
  if (value == null) {
    return "알 수 없음";
  }

  return value ? "ON" : "OFF";
}
