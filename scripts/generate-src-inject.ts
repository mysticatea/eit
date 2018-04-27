import fs from "fs"
import path from "path"
import eslint from "eslint"
import * as ts from "typescript"

const libRoot = "./src/lib"
const outputFile = "./src/inject.ts"

// Load options
const options = JSON.parse(fs.readFileSync("tsconfig.json", "utf8"))
    .compilerOptions as ts.CompilerOptions
delete options.moduleResolution

// Load declarations
const filenames = [] as string[]
const elements = [] as string[]
for (const filename of fs.readdirSync(libRoot)) {
    const filePath = path.join(libRoot, filename)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const file = ts.createSourceFile(
        filePath,
        fileContent,
        ts.ScriptTarget.ES2015,
        false,
        ts.ScriptKind.TS,
    )

    filenames.push(path.basename(filename, ".ts"))

    let first = true
    file.forEachChild(node => {
        if (
            node.kind === ts.SyntaxKind.FunctionDeclaration &&
            hasModifier(node, ts.SyntaxKind.ExportKeyword) &&
            hasModifier(node, ts.SyntaxKind.DefaultKeyword)
        ) {
            const decl = node as ts.FunctionDeclaration
            if (decl.body === undefined || (first && decl.body)) {
                const start = decl.getFullStart()
                const end = decl.body ? decl.body.getFullStart() : decl.getEnd()
                const code = fileContent
                    .slice(start, end)
                    .trim()
                    .replace(/^export default function\s*(\*\s+)?/, "")
                    .replace(/this: IterableIterator<T>,?/, "")
                    .replace(/^(\w+)<T>/, "$1")
                    .replace(/^(\w+)<T,\s*/, "$1<")
                    .replace(/(\w+):\s+(\w+)\s+=\s+\S+/g, "$1?: $2")
                    .trim()

                if (!/this:\s*IterableIterator/.test(code)) {
                    elements.push(code)
                }
            }

            first = false
        }
    })
}

// Write File
const linter = new eslint.CLIEngine({ fix: true })
const code = `/* DON'T EDIT THIS FILE; THIS IS AUTO-GENERATED. */
${filenames.map(toImportDeclarations).join("\n")}
import { property } from "./utils"

const IteratorPrototype = Object.getPrototypeOf(
    Object.getPrototypeOf([][Symbol.iterator]()),
)
Object.defineProperties(IteratorPrototype, {
    ${filenames.map(toProperties).join(",\n")}
})

declare global {
    interface IterableIterator<T> {
        ${elements.join("\n")}
    }
}
`
const lintResult = linter.executeOnText(code, outputFile)
const fixedCode = lintResult.results[0].output || code

fs.writeFileSync(outputFile, fixedCode)

//------------------------------------------------------------------------------

function hasModifier(node: ts.Node, kind: ts.SyntaxKind): boolean {
    return (
        node.modifiers !== undefined &&
        node.modifiers.some(modifier => modifier.kind === kind)
    )
}

function toImportDeclarations(fileName: string): string {
    return `import ${toCamelCase(fileName)} from "./lib/${fileName}"`
}

function toProperties(fileName: string): string {
    const methodName = toCamelCase(fileName)
    return `${methodName}: property(${methodName})`
}

function toCamelCase(kebabCase: string): string {
    return kebabCase.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}
