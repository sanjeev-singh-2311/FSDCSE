const fs = require("fs")
const Optional = require("./Monads.js").default

fs.writeFileSync("data.txt", "Hello World\n")
fs.link()

let b = new Optional().flatMap(() => new Optional(fs.readFileSync("data.txt", { encoding: "utf8" })))

fs.appendFileSync("data.txt", "Appended to File\n")
b = b.flatMap(() => new Optional(fs.readFileSync("data.txt", { encoding: "utf8" })))

console.log(b.isNone() || b.unwrap())
