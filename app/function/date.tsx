export function formatDateYearMonth(date?: Date): string {
  if (!date) {
    return "aujourd'hui";
  }
  const month = date.toLocaleString("fr-fr", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export function formatDateYear(date: Date): string {
    if (!date) {
      return "aujourd'hui";
    }
    const year = date.getFullYear();
    return `${year}`;
  }
  