export function formatDate(date: Date): string {
    if (!date) {
        return "aujourd'hui";
    }
    const month = date.toLocaleString('fr-fr', { month: 'short' });
    const year = date.getFullYear();
    return `${month} ${year}`;
}