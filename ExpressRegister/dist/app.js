"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const promises_1 = __importDefault(require("fs/promises"));
const app = (0, express_1.default)();
app.use((0, express_2.json)());
const PORT = 5619;
let loadedDB = false;
let db = [];
let curr_id = 0;
app.get("/hello", (_, res) => {
    res.status(200).send("Hello world\n");
    return;
});
app.get("/", function get_all_users(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!loadedDB) {
            try {
                db = JSON.parse(yield promises_1.default.readFile("./db.json", { encoding: "utf8" }));
            }
            catch (_) {
                db = [];
            }
            loadedDB = true;
        }
        if (db.length === 0) {
            res.status(404).json({
                data: "[]",
                message: "No data found"
            });
            return;
        }
        res.status(200).json({
            data: db,
            message: "Data fetch successful"
        });
    });
});
app.post("/", function add_new_user(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const curr_user = Object.assign({ id: curr_id }, req.body);
        curr_id += 1;
        db = [...db, curr_user];
        yield promises_1.default.writeFile("./db.json", JSON.stringify(db));
        res.status(200).json({
            message: "User added successfully",
            user: curr_user
        });
    });
});
app.get("/admin/showByEmail/:email", function get_by_email(req, res) {
    const email = req.params["email"];
    const data = db.filter((d) => d.email === email);
    if (data.length == 0) {
        res.status(404).json({
            message: "No matching entries",
            data: data
        });
        return;
    }
    res.status(200).json({
        message: `${data.length} entries found`,
        data: data
    });
});
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});
