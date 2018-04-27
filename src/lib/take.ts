import { empty, toInteger } from "../utils"

export function* takeHead<T>(
    that: IterableIterator<T>,
    count: number,
): IterableIterator<T> {
    let index = -1

    for (const element of that) {
        if (++index < count) {
            yield element
        } else {
            break
        }
    }
}

export function* takeTail<T>(
    that: IterableIterator<T>,
    count: number,
): IterableIterator<T> {
    const buffer = new Array(count)

    let index = 0
    for (const element of that) {
        buffer[index] = element
        index = index + 1 === count ? 0 : index + 1
    }

    const end = index
    while (index < count) {
        yield buffer[index]
        index += 1
    }
    index = 0
    while (index < end) {
        yield buffer[index]
        index += 1
    }
}

export default function take<T>(
    this: IterableIterator<T>,
    count: number,
): IterableIterator<T> {
    const number = toInteger(count)

    if (Number.isFinite(number)) {
        if (number > 0) {
            return takeHead(this, number)
        }
        if (number < 0) {
            return takeTail(this, -number)
        }
        return empty()
    }
    return this
}
