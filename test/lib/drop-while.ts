import assert from "assert"
import "../../src/index"

describe(".dropWhile()", () => {
    const source = () => [1, 2, 3, 4].values()

    it("should iterate nothing if callback returns true always", () => {
        assert.deepStrictEqual(
            Array.from(source().dropWhile(value => true)),
            [],
        )
    })

    it("should iterate the same elements if callback returns false always", () => {
        assert.deepStrictEqual(Array.from(source().dropWhile(value => false)), [
            1,
            2,
            3,
            4,
        ])
    })

    it("should iterate [3, 4] if callback is 'value <= 2'", () => {
        assert.deepStrictEqual(
            Array.from(source().dropWhile(value => value <= 2)),
            [3, 4],
        )
    })

    it("should iterate [1, 2, 3, 4] if callback is 'value % 2 === 0'", () => {
        assert.deepStrictEqual(
            Array.from(source().dropWhile(value => value % 2 === 0)),
            [1, 2, 3, 4],
        )
    })

    it("should iterate [2, 3, 4] if callback is 'value % 2 === 1'", () => {
        assert.deepStrictEqual(
            Array.from(source().dropWhile(value => value % 2 === 1)),
            [2, 3, 4],
        )
    })

    it("should give the 2nd argument to 'this'", () => {
        assert.deepStrictEqual(
            Array.from(
                source().dropWhile(function(value) {
                    return value <= this
                }, 2),
            ),
            [3, 4],
        )
    })
})
