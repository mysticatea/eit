if (Array.prototype.values === undefined) {
    Object.defineProperty(
        Array.prototype,
        "values",
        Object.getOwnPropertyDescriptor(Array.prototype, Symbol.iterator)!,
    )
}

export {}
