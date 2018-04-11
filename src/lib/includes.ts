export default function includes<T>(
    this: IterableIterator<T>,
    searchElement: T,
    fromIndex: number = 0,
): boolean {
    let index = -1
    for (const element of this) {
        if (++index >= fromIndex && element === searchElement) {
            return true
        }
    }
    return false
}
