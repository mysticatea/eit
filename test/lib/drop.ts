import assert from "assert"
import "../../src/index"

describe(".drop()", () => {
    const source = () => [1, 2, 3, 4].values()

    it("should iterate [1, 2, 3, 4] if '0' is given", () => {
        assert.deepStrictEqual(Array.from(source().drop(0)), [1, 2, 3, 4])
    })

    it("should iterate [2, 3, 4] if '1' is given", () => {
        assert.deepStrictEqual(Array.from(source().drop(1)), [2, 3, 4])
    })

    it("should iterate [3, 4] if '2' is given", () => {
        assert.deepStrictEqual(Array.from(source().drop(2)), [3, 4])
    })

    it("should iterate [4] if '3' is given", () => {
        assert.deepStrictEqual(Array.from(source().drop(3)), [4])
    })

    it("should iterate [] if '4' is given", () => {
        assert.deepStrictEqual(Array.from(source().drop(4)), [])
    })

    it("should iterate [] if '5' is given", () => {
        assert.deepStrictEqual(Array.from(source().drop(5)), [])
    })

    it("should iterate [1, 2, 3] if '-1' is given", () => {
        assert.deepStrictEqual(Array.from(source().drop(-1)), [1, 2, 3])
    })
})
