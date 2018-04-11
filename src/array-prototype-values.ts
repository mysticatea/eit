if (Array.prototype.values === undefined) {
    Object.defineProperty(Array.prototype, "values", {
        value: function values(this: Array<any>) {
            return this[Symbol.iterator]()
        },
        configurable: true,
        writable: true,
    })
}

export {}
