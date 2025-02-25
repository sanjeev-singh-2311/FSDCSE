import http from "http"
import { promises } from "fs"

const PORT = 8080

const server = http.createServer(async (req, res) => {
    if (req.url === "/show" && req.method === "POST") {
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200
        res.end(JSON.stringify({
            body: "Hello gaiz"
        }))
        return -1;
    }
    if (req.url === "/get_json" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json")
        try {
            const data = await promises.readFile("obj.json", { encoding: "utf8" })
            res.end(data)
            return 0
        } catch {
            res.end()
            return 0
        }
    }
    if (req.url === "/get_html" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html")
        try {
            const data = await promises.readFile("ssr.html", { encoding: "utf8" })
            res.end(data)
            return 0
        } catch {
            res.end()
            return 0
        }
    }
    res.setHeader("Content-Type", "text/html")
    res.write("<body style='background:red'> Hello </h1>")
    res.end()
})

server.listen(PORT, "0.0.0.0", () => {
    console.log("Listening")
})
