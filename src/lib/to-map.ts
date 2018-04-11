export default function toMap<K, V>(this: IterableIterator<[K, V]>): Map<K, V> {
    return new Map(this)
}
