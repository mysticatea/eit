export default function find<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
): T | undefined
export default function find<T, U extends T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => element is U,
): U | undefined
export default function find<T, R>(
    this: IterableIterator<T>,
    callback: (
        this: R,
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg: R,
): T | undefined
export default function find<T, U extends T, R>(
    this: IterableIterator<T>,
    callback: (
        this: R,
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => element is U,
    thisArg: R,
): U | undefined

export default function find<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg?: any,
): T | undefined {
    let index = -1
    if (thisArg === undefined) {
        for (const element of this) {
            if (callback(element, ++index, this)) {
                return element
            }
        }
    } else {
        for (const element of this) {
            if (callback.call(thisArg, element, ++index, this)) {
                return element
            }
        }
    }
    return undefined
}
