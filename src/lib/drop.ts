import { empty, toInteger } from "../utils"

export function* dropHead<T>(
    that: IterableIterator<T>,
    count: number,
): IterableIterator<T> {
    let index = -1

    for (const element of that) {
        if (++index >= count) {
            yield element
        }
    }
}

export function* dropTail<T>(
    that: IterableIterator<T>,
    count: number,
): IterableIterator<T> {
    const it = that[Symbol.iterator]()
    const buffer = new Array(count)
    let normalCompletion = true
    let ret: IteratorResult<T>

    try {
        let index = -1
        while (
            ++index < count &&
            !(normalCompletion = (ret = it.next()).done)
        ) {
            buffer[index] = ret.value
            normalCompletion = true
        }

        index = 0
        while (!(normalCompletion = (ret = it.next()).done)) {
            yield buffer[index]
            buffer[index] = ret.value
            index = index + 1 === count ? 0 : index + 1
            normalCompletion = true
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
}

export default function drop<T>(
    this: IterableIterator<T>,
    count: number,
): IterableIterator<T> {
    const number = toInteger(count)

    if (Number.isFinite(number)) {
        if (number > 0) {
            return dropHead(this, number)
        }
        if (number < 0) {
            return dropTail(this, -number)
        }
        return this
    }
    return empty()
}
