export default function forEach<T, R>(
    this: IterableIterator<T>,
    callback: (
        this: R,
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => void,
    thisArg: R,
): void
export default function forEach<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => void,
): void

export default function forEach<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => void,
    thisArg?: any,
): void {
    let index = -1
    if (thisArg === undefined) {
        for (const element of this) {
            callback(element, ++index, this)
        }
    } else {
        for (const element of this) {
            callback.call(thisArg, element, ++index, this)
        }
    }
}
