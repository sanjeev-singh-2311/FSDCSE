import promises from "fs/promises";
import http from "http";

let db = []

const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "*")

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
    else if (req.url === "/login_user") {
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
                return e.name === post.name && e.password === post.password
            })
            if (usr === undefined) {
                res.end("{message : 'User Not Found'}")
                return 0;
            }
            res.end(JSON.stringify(usr));
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
    if (promRead.length > 0)
        db = promRead.split("\n")
    console.log("Started")
})
process.on('SIGINT', async () => {
    console.log("Server shutting down...");

    try {
        const writable = db.map((i) => JSON.stringify(i))
        const toWrite = writable.join("\n");
        await promises.writeFile("db.txt", toWrite, { encoding: "utf8" });
        console.log("Database saved successfully.");
    } catch (err) {
        console.error("Error writing db.txt:", err);
    } finally {
        process.exit(0);
    }
})
