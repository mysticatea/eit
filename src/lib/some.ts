export default function some<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
): boolean
export default function some<T, R>(
    this: IterableIterator<T>,
    callback: (
        this: R,
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg: R,
): boolean

export default function some<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg?: any,
): boolean {
    let index = -1
    if (thisArg === undefined) {
        for (const element of this) {
            if (callback(element, ++index, this)) {
                return true
            }
        }
    } else {
        for (const element of this) {
            if (callback.call(thisArg, element, ++index, this)) {
                return true
            }
        }
    }
    return false
}
