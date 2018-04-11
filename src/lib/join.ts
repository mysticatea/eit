export default function join<T>(
    this: IterableIterator<T>,
    separator: string = ",",
): string {
    let first = true
    let s = ""

    for (const element of this) {
        if (first) {
            first = false
        } else {
            s += separator
        }
        s += String(element)
    }

    return s
}
