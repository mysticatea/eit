export default function toSet<T>(this: IterableIterator<T>): Set<T> {
    return new Set(this)
}
