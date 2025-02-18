import http from "http"

const PORT = 8080

let db = []

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.write("<body style='background:red'> Hello </h1>")
    res.end()
})

server.listen(PORT, "0.0.0.0", () => {
    console.log("Listening")
})
