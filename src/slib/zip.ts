type Entry = {
    it: Iterator<any>
    value: any
    done: boolean
}

function toValue(entry: Entry): any {
    return entry.value
}

function moveNext(entry: Entry): boolean {
    entry.done = true
    ;({ value: entry.value, done: entry.done } = entry.it.next())
    return !entry.done
}

function callReturn(entry: Entry): void {
    if (entry && !entry.done && typeof entry.it.return === "function") {
        try {
            entry.it.return()
        } catch (_ignore) {
            // ignore.
        }
    }
}

export default function zip<T0>(it0: Iterable<T0>): IterableIterator<[T0]>
export default function zip<T0, T1>(
    it0: Iterable<T0>,
    it1: Iterable<T1>,
): IterableIterator<[T0, T1]>
export default function zip<T0, T1, T2>(
    it0: Iterable<T0>,
    it1: Iterable<T1>,
    it2: Iterable<T2>,
): IterableIterator<[T0, T1, T2]>
export default function zip<T0, T1, T2, T3>(
    it0: Iterable<T0>,
    it1: Iterable<T1>,
    it2: Iterable<T2>,
    it3: Iterable<T3>,
): IterableIterator<[T0, T1, T2, T3]>
export default function zip<T0, T1, T2, T3, T4>(
    it0: Iterable<T0>,
    it1: Iterable<T1>,
    it2: Iterable<T2>,
    it3: Iterable<T3>,
    it4: Iterable<T4>,
): IterableIterator<[T0, T1, T2, T3, T4]>
export default function zip<T0, T1, T2, T3, T4, T5>(
    it0: Iterable<T0>,
    it1: Iterable<T1>,
    it2: Iterable<T2>,
    it3: Iterable<T3>,
    it4: Iterable<T4>,
    it5: Iterable<T5>,
): IterableIterator<[T0, T1, T2, T3, T4, T5]>
export default function zip<T0, T1, T2, T3, T4, T5, T6>(
    it0: Iterable<T0>,
    it1: Iterable<T1>,
    it2: Iterable<T2>,
    it3: Iterable<T3>,
    it4: Iterable<T4>,
    it5: Iterable<T5>,
    it6: Iterable<T6>,
): IterableIterator<[T0, T1, T2, T3, T4, T5, T6]>
export default function zip<T0, T1, T2, T3, T4, T5, T6, T7>(
    it0: Iterable<T0>,
    it1: Iterable<T1>,
    it2: Iterable<T2>,
    it3: Iterable<T3>,
    it4: Iterable<T4>,
    it5: Iterable<T5>,
    it6: Iterable<T6>,
    it7: Iterable<T7>,
): IterableIterator<[T0, T1, T2, T3, T4, T5, T6, T7]>
export default function zip<T>(
    ...iterables: Iterable<T>[]
): IterableIterator<T[]>

export default function* zip(
    ...iterables: Iterable<any>[]
): IterableIterator<any[]> {
    const len = iterables.length
    const entries = new Array<Entry>(len)
    let errored = false
    let error
    try {
        for (let i = 0; i < len; ++i) {
            entries[i] = {
                it: iterables[i][Symbol.iterator](),
                value: undefined,
                done: true,
            }
        }

        while (entries.every(moveNext)) {
            yield entries.map(toValue)
        }
    } catch (e) {
        errored = true
        error = e
    } finally {
        try {
            entries.forEach(callReturn)
        } finally {
            if (errored) {
                throw error //eslint-disable-line no-unsafe-finally
            }
        }
    }
}
