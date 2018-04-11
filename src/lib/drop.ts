export default function* drop<T>(
    this: IterableIterator<T>,
    count: number,
): IterableIterator<T> {
    if (!(count >= 0)) {
        throw new Error("'count' parameter must be zero or a positive number.")
    }

    let index = -1
    for (const element of this) {
        if (++index >= count) {
            yield element
        }
    }
}
