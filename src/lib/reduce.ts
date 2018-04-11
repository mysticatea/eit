function reduceWithNoInitialValue<T, U extends T>(
    self: IterableIterator<T>,
    callback: (
        accumulator: U,
        currentValue: T,
        currentIndex: number,
        iterator: IterableIterator<T>,
    ) => U,
): U {
    const it = self[Symbol.iterator]()
    let normalCompletion = true
    let ret: IteratorResult<T>

    try {
        if (!(normalCompletion = (ret = it.next()).done)) {
            let accumulator = ret.value as U // always T === U
            let index = 0
            normalCompletion = true

            while (!(normalCompletion = (ret = it.next()).done)) {
                accumulator = callback(accumulator, ret.value, ++index, self)
                normalCompletion = true
            }

            return accumulator
        }
    } catch (error) {
        try {
            if (!normalCompletion && typeof it.return === "function") {
                it.return()
            }
        } finally {
            throw error //eslint-disable-line no-unsafe-finally
        }
    }

    throw new TypeError(
        "Reduce of empty IterableIterator with no initial value",
    )
}

export default function reduce<T, U extends T>(
    this: IterableIterator<T>,
    callback: (
        accumulator: U,
        currentValue: T,
        currentIndex: number,
        iterator: IterableIterator<T>,
    ) => U,
    initialValue: U,
): U
export default function reduce<T>(
    this: IterableIterator<T>,
    callback: (
        accumulator: T,
        currentValue: T,
        currentIndex: number,
        iterator: IterableIterator<T>,
    ) => T,
): T

export default function reduce<T, U extends T>(
    this: IterableIterator<T>,
    callback: (
        accumulator: U,
        currentValue: T,
        currentIndex: number,
        iterator: IterableIterator<T>,
    ) => U,
    initialValue?: U,
): U {
    if (arguments.length === 1) {
        return reduceWithNoInitialValue(this, callback)
    }

    let accumulator: U = initialValue!
    let index = -1
    for (const element of this) {
        accumulator = callback(accumulator, element, ++index, this)
    }
    return accumulator
}
