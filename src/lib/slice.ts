export default function* slice<T>(
    this: IterableIterator<T>,
    start: number,
    end: number,
): IterableIterator<T> {
    if (!(start >= 0)) {
        throw new Error("'start' parameter must be zero or a positive number.")
    }
    if (!(end >= 0)) {
        throw new Error("'end' parameter must be zero or a positive number.")
    }

    let index = 0
    for (const element of this) {
        if (!(index < end)) {
            break
        }
        if (index >= start) {
            yield element
        }
        index += 1
    }
}
