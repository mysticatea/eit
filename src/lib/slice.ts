import { toInteger } from "../utils"
import { dropHead } from "./drop"
import { takeHead } from "./take"

function* sliceSimply<T>(
    that: IterableIterator<T>,
    start: number,
    end: number,
): IterableIterator<T> {
    let index = 0
    for (const element of that) {
        if (index >= end) {
            break
        }
        if (index >= start) {
            yield element
        }
        index += 1
    }
}

export default function slice<T>(
    this: IterableIterator<T>,
    start?: number,
    end?: number,
): IterableIterator<T> {
    const startNumber = start === undefined ? 0 : toInteger(start)
    const endNumber =
        end === undefined ? Number.POSITIVE_INFINITY : toInteger(end)

    if (startNumber === 0 && endNumber > 0) {
        return takeHead(this, endNumber)
    }
    if (startNumber > 0 && endNumber === Number.POSITIVE_INFINITY) {
        return dropHead(this, startNumber)
    }
    if (startNumber >= 0 && endNumber >= 0) {
        return sliceSimply(this, startNumber, endNumber)
    }
    return Array.from(this)
        .slice(start, end)
        .values()
}
