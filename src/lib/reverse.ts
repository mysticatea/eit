export default function* reverse<T>(
    this: IterableIterator<T>,
): IterableIterator<T> {
    const array = Array.from(this)
    for (let i = array.length - 1; i >= 0; --i) {
        yield array[i]
    }
}
