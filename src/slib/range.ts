export default function* range(
    start: number = 0,
    end: number = Number.POSITIVE_INFINITY,
    step: number = 1,
): IterableIterator<number> {
    const d = Math.abs(step)
    if (start <= end) {
        for (let i = 0, v = start; v < end; i += 1, v = start + i * d) {
            yield v
        }
    } else {
        for (let i = 0, v = start; v > end; i += 1, v = start - i * d) {
            yield v
        }
    }
}
