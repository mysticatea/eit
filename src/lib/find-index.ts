export default function findIndex<T, R>(
    this: IterableIterator<T>,
    callback: (
        this: R,
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg: R,
): number
export default function findIndex<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
): number

export default function findIndex<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg?: any,
): number {
    let index = -1
    if (thisArg === undefined) {
        for (const element of this) {
            if (callback(element, ++index, this)) {
                return index
            }
        }
    } else {
        for (const element of this) {
            if (callback.call(thisArg, element, ++index, this)) {
                return index
            }
        }
    }
    return -1
}
