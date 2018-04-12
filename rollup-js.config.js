import resolve from "rollup-plugin-node-resolve"
import sourcemaps from "rollup-plugin-sourcemaps"

export default {
    input: ".temp/index.js",
    output: {
        file: "index.js",
        format: "cjs",
        sourcemap: true,
        sourcemapFile: "index.js.map",
        strict: true,
        banner: `/*!
 * @author Toru Nagashima <https://github.com/mysticatea>
 */`,
    },
    plugins: [sourcemaps(), resolve()],
}
