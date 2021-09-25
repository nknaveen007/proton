export const YearListGenretor = (added=0) => {
    const currentYear = (new Date()).getFullYear();
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
    return range(currentYear + added, currentYear - 50, -1)
}