export function* empty(): IterableIterator<any> {
    // return nothing.
}

export function property(value: any): PropertyDescriptor {
    return { value, configurable: true, writable: true }
}

// https://www.ecma-international.org/ecma-262/8.0/#sec-tointeger
export function toInteger(value: any): number {
    const number = Number(value)

    if (Number.isNaN(number)) {
        return 0
    }
    if (number === 0 || !Number.isFinite(number)) {
        return number
    }
    return Math.sign(number) * Math.floor(Math.abs(number))
}
