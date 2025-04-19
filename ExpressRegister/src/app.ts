import express, { Express } from "express";
import { json } from "express";
import fs from "fs/promises"

interface User {
    id: number
    name: string
    email: string
    password: string
}

const app: Express = express()
app.use(json())
const PORT = 5619
let loadedDB = false

let db: User[] = []
let curr_id = 0

app.get("/hello", (_: express.Request, res: express.Response) => {
    res.status(200).send("Hello world\n")
    return
})

app.get("/", async function get_all_users(_: express.Request, res: express.Response) {
    if (!loadedDB) {
        try {
            db = JSON.parse(await fs.readFile("./db.json", { encoding: "utf8" }))
        } catch (_) {
            db = []
        }
        loadedDB = true
    }
    if (db.length === 0) {
        res.status(404).json({
            data: "[]",
            message: "No data found"
        })
        return
    }
    res.status(200).json({
        data: db,
        message: "Data fetch successful"
    })
    return
})

app.post("/", async function add_new_user(req: express.Request, res: express.Response) {
    console.log(req.body)
    const curr_user = { id: curr_id, ...req.body };
    curr_id += 1

    db = [...db, curr_user]

    await fs.writeFile("./db.json", JSON.stringify(db))

    res.status(200).json({
        message: "User added successfully",
        user: curr_user
    })
})

app.get("/admin/showByEmail/:email", function get_by_email(req: express.Request, res: express.Response) {
    const email = req.params["email"]
    const data: User[] = db.filter((d) => d.email === email)
    if (data.length == 0) {
        res.status(404).json({
            message: "No matching entries",
            data: data
        })
        return
    }
    res.status(200).json({
        message: `${data.length} entries found`,
        data: data
    })
    return
})


app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`)
})
