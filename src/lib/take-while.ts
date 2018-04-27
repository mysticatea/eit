export default function takeWhile<T, R, U extends T>(
    this: IterableIterator<T>,
    callback: (
        this: R,
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => element is U,
    thisArg: R,
): IterableIterator<U>
export default function takeWhile<T, R>(
    this: IterableIterator<T>,
    callback: (
        this: R,
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg: R,
): IterableIterator<T>
export default function takeWhile<T, U extends T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => element is U,
): IterableIterator<U>
export default function takeWhile<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
): IterableIterator<T>

export default function* takeWhile<T>(
    this: IterableIterator<T>,
    callback: (
        element: T,
        index: number,
        iterator: IterableIterator<T>,
    ) => boolean,
    thisArg?: any,
): IterableIterator<T> {
    let index = -1
    if (thisArg === undefined) {
        for (const element of this) {
            if (callback(element, ++index, this)) {
                yield element
            } else {
                break
            }
        }
    } else {
        for (const element of this) {
            if (callback.call(thisArg, element, ++index, this)) {
                yield element
            } else {
                break
            }
        }
    }
}
