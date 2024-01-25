export function formatDateYearMonth(date?: Date): string {
  if (!date) {
    return "aujourd'hui";
  }
  const month = date.toLocaleString("fr-fr", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}

  
export function differenceBetweenTwoDates(startingDate: Date, endingDate?: Date): string {
  if (!endingDate) {
    endingDate = new Date();
  }
  if(startingDate > endingDate) {
    throw new Error('date1 should be before date2');
  }
  const years = endingDate.getFullYear() - startingDate.getFullYear();
  const months = endingDate.getMonth() - startingDate.getMonth();
  return years > 0 ? `${years} ${years > 1 ? "ans" : "an"} et ${months} mois` : `${months} mois`
}
  