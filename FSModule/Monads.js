export default class Optional {
    // Signature :: A -> M[A]
    constructor(data) {
        this.data = data
    }

    // Signature :: M[A] -> Bool
    isNone() {
        return this.data === null
    }

    // Signature :: M[A] -> A | Error
    // Literally just flatten
    unwrap() {
        if (this.isNone())
            throw "What is bro on about lmao"
        return this.data
    }

    // Signature :: M[A] -> (A -> B) -> M[B]
    // Literally just Map
    bind(cb) {
        if (this.isNone())
            return this
        let data = this.unwrap()
        try { return new Optional(cb(data)) }
        catch { return new Optional(null) }
    }


    // Signature :: M[A] -> (A -> M[B]) -> M[B]
    // Map + Flatten
    flatMap(cb) {
        if (this.isNone())
            return this
        return this.bind(cb).unwrap()
    }

}

let a = new Optional(30)
let b = new Optional(4)

// console.log(a.flatMap((x) => b.bind((y) => x / y)))
