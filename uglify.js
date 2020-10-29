const { minify } = require("uglify-js")
const fs = require("fs")
const path = require("path")

const files = ["index.js", "moocli.js"]
    .map(name => path.resolve(__dirname, `dist/${name}`))

const minified = files.map(file => {
    const fileText = fs.readFileSync(file, { encoding: "utf8" })
    const { code } = minify(fileText)
    return { file, code }
})

minified.forEach(m => fs.writeFileSync(m.file, m.code))