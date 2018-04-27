import assert from "assert"
import "../../src/index"

describe(".takeWhile()", () => {
    const source = () => [1, 2, 3, 4].values()

    it("iterate nothing if callback returns false always", () => {
        assert.deepStrictEqual(
            Array.from(source().takeWhile(value => false)),
            [],
        )
    })

    it("iterate the same elements if callback returns true always", () => {
        assert.deepStrictEqual(Array.from(source().takeWhile(value => true)), [
            1,
            2,
            3,
            4,
        ])
    })

    it("iterate [1, 2] if callback is 'value <= 2'", () => {
        assert.deepStrictEqual(
            Array.from(source().takeWhile(value => value <= 2)),
            [1, 2],
        )
    })

    it("iterate nothing if callback is 'value % 2 === 0'", () => {
        assert.deepStrictEqual(
            Array.from(source().takeWhile(value => value % 2 === 0)),
            [],
        )
    })

    it("iterate [1] if callback is 'value % 2 === 1'", () => {
        assert.deepStrictEqual(
            Array.from(source().takeWhile(value => value % 2 === 1)),
            [1],
        )
    })

    it("should give the 2nd argument to 'this'", () => {
        assert.deepStrictEqual(
            Array.from(
                source().takeWhile(function(value) {
                    return value <= this
                }, 2),
            ),
            [1, 2],
        )
    })

    it("should cast elements if type guard is given", () => {
        function isNumber(x: any): x is number {
            return typeof x === "number"
        }

        const casted: number[] = Array.from(
            [1, "1"].values().takeWhile(isNumber),
        )

        assert.deepStrictEqual(casted, [1])
    })

    it("should cast elements if type guard and the 2nd argument is given", () => {
        function isNumberAndSameAsThis(this: number, x: any): x is number {
            return typeof x === "number" && x === this
        }

        const casted: number[] = Array.from(
            [1, "1", 2, "2"].values().takeWhile(isNumberAndSameAsThis, 1),
        )

        assert.deepStrictEqual(casted, [1])
    })
})
