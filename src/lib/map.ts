export default function map<T, U, R>(
    this: IterableIterator<T>,
    callback: (
        this: R,
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => U,
    thisArg: R,
): IterableIterator<U>
export default function map<T, U>(
    this: IterableIterator<T>,
    callback: (element: T, index: number, iterator: IterableIterator<T>) => U,
): IterableIterator<U>

export default function* map<T, U>(
    this: IterableIterator<T>,
    callback: (element: T, index: number, iterator: IterableIterator<T>) => U,
    thisArg?: any,
): IterableIterator<U> {
    let index = -1
    if (thisArg === undefined) {
        for (const element of this) {
            yield callback(element, ++index, this)
        }
    } else {
        for (const element of this) {
            yield callback.call(thisArg, element, ++index, this)
        }
    }
}
