import promises from "fs/promises";
import http from "http";

let db = []

const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "*")


    console.log("Request arrived")
    console.log(req.url)
    console.log(req.method)
    if (req.url === "/add_user" && req.method === "POST") {
        res.setHeader("Content-Type", "application/json")
        let body = "";
        let post = "";
        req.on("data", (data) => {
            body += data

            if (body.length > 1e6)
                req.socket.destroy()
        })
        req.on("end", () => {
            console.log(body)
            post = JSON.parse(body)
            db.push(post)
            res.end("{'message' : 'Added User'}")
            return 0
        })
    }
    else if (req.url === "/get_user") {
        res.setHeader("Content-Type", "application/json")

        res.end(JSON.stringify(db))
        return 0
    }
    else if (req.url === "/auth_user") {
        res.setHeader("Content-Type", "application/json")
        let body = "";
        let post = "";
        req.on("data", (data) => {
            body += data

            if (body.length > 1e6)
                req.socket.destroy()
        })
        req.on("end", () => {
            console.log(body)
            post = JSON.parse(body)
            const usr = db.find((e) => {
                return (e.username === post.username) && (e.password === post.password)
            })
            if (usr === undefined) {
                res.end(JSON.stringify({ message: 'User Not Found' }))
                return 0;
            }
            console.log("Auth success")
            res.end(JSON.stringify({ ...usr, "message": "User found" }));
            return 0
        })
    }
    else if (req.url === "/test") {
        res.end("Hello world")
        return 0;
    }
})

server.listen(5308, "0.0.0.0", async () => {
    const promRead = await promises.readFile("db.txt", { encoding: "utf8" })
    try {
        db = JSON.parse(promRead)
    } catch (_) {
        db = []
    }
    console.log(db)
    console.log("Started")
})
process.on('SIGINT', async () => {
    console.log("Server shutting down...");

    try {
        const writable = JSON.stringify(db);
        await promises.writeFile("db.txt", writable, { encoding: "utf8" });
        console.log("Database saved successfully.");
    } catch (err) {
        console.error("Error writing db.txt:", err);
    } finally {
        process.exit(0);
    }
})
