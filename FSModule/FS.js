import copyData from "./copyData.js"

// const fs = require("fs")
// const Optional = require("./Monads.js").default

// fs.writeFileSync("data.txt", "Hello World\n")
//
// let b = new Optional().flatMap(() => new Optional(fs.readFileSync("data.txt", { encoding: "utf8" })))
//
// fs.appendFileSync("data.txt", "Appended to File\n")
// b = b.flatMap(() => new Optional(fs.readFileSync("data.txt", { encoding: "utf8" })))
//
// console.log(b.isNone() || b.unwrap())
//
// const promises = require("fs").promises
//
// const fsp = promises.writeFile("data2.txt", "Hello World from Promise\n")
// fsp.then(() => {
//     console.log("File written successfully")
// }).catch(() => {
//     console.log("Write failed")
// })
//
// let fspMon = new Optional().flatMap(() => new Optional(promises.writeFile("data2.txt", "New World\n").
//     then(
//         "file written"
//     ).catch(
//         "failed"
//     )
// )
// )
//
// console.log(fspMon.isNone() || fspMon.unwrap())

copyData("dat1.txt", "dat2.txt")
