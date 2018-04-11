export default function toObject<K, V>(
    this: IterableIterator<[K, V]>,
): { [key: string]: V } {
    const obj = {} as { [key: string]: V }
    for (const [key, value] of this) {
        obj[String(key)] = value
    }
    return obj
}
