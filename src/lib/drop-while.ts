export default function dropWhile<T, R>(
    this: IterableIterator<T>,
    callback: (
        this: R,
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg: R,
): IterableIterator<T>
export default function dropWhile<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
): IterableIterator<T>

export default function* dropWhile<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg?: any,
): IterableIterator<T> {
    let taking = false
    let index = -1
    if (thisArg === undefined) {
        for (const element of this) {
            if (taking || (taking = !callback(element, ++index, this))) {
                yield element
            }
        }
    } else {
        for (const element of this) {
            if (
                taking ||
                (taking = !callback.call(thisArg, element, ++index, this))
            ) {
                yield element
            }
        }
    }
}
