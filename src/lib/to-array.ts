export default function toArray<T>(this: IterableIterator<T>): Array<T> {
    return Array.from(this)
}
