import express, { Express, json, Request, Response } from 'express'
import { promises } from 'fs'

interface User {
    id: number
    name: string
    email: string
}

const app: Express = express()
app.use(json())

app.get("/users", async (_: Request, res: Response) => {
    try {
        const data = await promises.readFile("src/data.json", "utf8")
        res.status(200).json({ "data": JSON.parse(data) as [User], "err": null })
    } catch (e) {
        console.log(e)
        res.status(400).json({ "data": null, "err": "Unable to read data" })
    }
})

app.post("/createuser", async (req: Request, res: Response) => {
    const body: User = req.body
    console.log(body)
    try {
        let dat = await promises.readFile("src/data.json", "utf8")
        if (dat === "") {
            dat = "[]"
        }
        const parDat = JSON.parse(dat);
        console.log(parDat)
        await promises.writeFile("src/data.json", JSON.stringify([...parDat, body]))
        res.status(200).json({ "data": body, "err": null })
    } catch (e) {
        console.log(e)
        res.status(400).json({ "data": null, "err": "Unable to add data" })
    }
})

app.listen(3000, () => {
    console.log("SERVER started on port 3000")
})
