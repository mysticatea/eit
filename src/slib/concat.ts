export default function* concat<T>(
    ...iterables: IterableIterator<T>[]
): IterableIterator<T> {
    for (const iterable of iterables) {
        yield* iterable
    }
}
