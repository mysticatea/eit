import assert from "assert"
import "../../src/index"

describe(".dropWhile()", () => {
    it("iterate nothing if callback returns true always", () => {
        assert.deepStrictEqual(
            Array.from([1, 2, 3, 4].values().dropWhile(value => true)),
            [],
        )
    })

    it("iterate the same elements if callback returns false always", () => {
        assert.deepStrictEqual(
            Array.from([1, 2, 3, 4].values().dropWhile(value => false)),
            [1, 2, 3, 4],
        )
    })

    it("iterate [1, 2] if callback is 'value <= 2'", () => {
        assert.deepStrictEqual(
            Array.from([1, 2, 3, 4].values().dropWhile(value => value <= 2)),
            [3, 4],
        )
    })

    it("iterate [1, 2, 3, 4] if callback is 'value % 2 === 0'", () => {
        assert.deepStrictEqual(
            Array.from(
                [1, 2, 3, 4].values().dropWhile(value => value % 2 === 0),
            ),
            [1, 2, 3, 4],
        )
    })

    it("iterate [2, 3, 4] if callback is 'value % 2 === 1'", () => {
        assert.deepStrictEqual(
            Array.from(
                [1, 2, 3, 4].values().dropWhile(value => value % 2 === 1),
            ),
            [2, 3, 4],
        )
    })
})
