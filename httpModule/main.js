import http from "http"

const PORT = 8080

let db = []

const server = http.createServer((req, res) => {
    if (req.url === "/show" && req.method === "POST") {
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200
        res.end(JSON.stringify({
            body: "Kill yourself"
        }))
        return -1;
    }
    res.setHeader("Content-Type", "text/html")
    res.write("<body style='background:red'> Hello </h1>")
    res.end()
})

server.listen(PORT, "0.0.0.0", () => {
    console.log("Listening")
})
