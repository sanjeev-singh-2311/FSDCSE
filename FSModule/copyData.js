import { promises } from "fs"

export default async function copyData(file1, file2) {
    promises.readFile(file1, { encoding: "utf8" })
        .then((s) => {
            promises.writeFile(file2, s)
                .then(() => {
                    console.log(JSON.parse(s))
                })
                .catch((e) => {
                    console.log("Write Failed")
                })
        })
        .catch(() => {
            console.log("Read Failed")
            return -1;
        })
}

