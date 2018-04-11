export default function indexOf<T>(
    this: IterableIterator<T>,
    searchElement: T,
    fromIndex: number = 0,
): number {
    let index = -1
    for (const element of this) {
        if (++index >= fromIndex && element === searchElement) {
            return index
        }
    }
    return -1
}
