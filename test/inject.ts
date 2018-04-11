import assert from "assert"
import dropWhile from "../src/lib/drop-while"
import drop from "../src/lib/drop"
import every from "../src/lib/every"
import filter from "../src/lib/filter"
import findIndex from "../src/lib/find-index"
import find from "../src/lib/find"
import forEach from "../src/lib/for-each"
import includes from "../src/lib/includes"
import indexOf from "../src/lib/index-of"
import join from "../src/lib/join"
import map from "../src/lib/map"
import reduce from "../src/lib/reduce"
import reverse from "../src/lib/reverse"
import slice from "../src/lib/slice"
import some from "../src/lib/some"
import takeWhile from "../src/lib/take-while"
import take from "../src/lib/take"
import toArray from "../src/lib/to-array"
import toSet from "../src/lib/to-set"
import "../src/index"

function verifyExtensionMethods(target: any, negative = false): void {
    const methods = {
        dropWhile,
        drop,
        every,
        filter,
        findIndex,
        find,
        forEach,
        includes,
        indexOf,
        join,
        map,
        reduce,
        reverse,
        slice,
        some,
        takeWhile,
        take,
        toArray,
        toSet,
    }

    for (const key of Object.keys(methods)) {
        it(`should${negative ? "n't" : ""} have '${key}' method.`, () => {
            assert[negative ? "notStrictEqual" : "strictEqual"](
                target[key],
                methods[key],
            )
        })
    }
}

describe("[inject]", () => {
    describe("Array", () => {
        verifyExtensionMethods([], true)
    })
    describe("Array.prototype.values()", () => {
        verifyExtensionMethods([].values())
    })
    describe("Array.prototype.keys()", () => {
        verifyExtensionMethods([].keys())
    })
    describe("Array.prototype.entries()", () => {
        verifyExtensionMethods([].entries())
    })

    describe("Set", () => {
        verifyExtensionMethods(new Set(), true)
    })
    describe("Set.prototype.values()", () => {
        verifyExtensionMethods(new Set().values())
    })
    describe("Set.prototype.keys()", () => {
        verifyExtensionMethods(new Set().keys())
    })
    describe("Set.prototype.entries()", () => {
        verifyExtensionMethods(new Set().entries())
    })

    describe("Map", () => {
        verifyExtensionMethods(new Map(), true)
    })
    describe("Map.prototype.values()", () => {
        verifyExtensionMethods(new Map().values())
    })
    describe("Map.prototype.keys()", () => {
        verifyExtensionMethods(new Map().keys())
    })
    describe("Map.prototype.entries()", () => {
        verifyExtensionMethods(new Map().entries())
    })

    describe("Generator", () => {
        verifyExtensionMethods(
            (function*() {
                /* empty */
            })(),
        )
    })
})
