// Utility class
// accepts hash (obj)
// whatever key value pairs
// set new key value pairs
// get value given a key
// delete key and value given a key
// undo function similar to wp (undo multiple things)
// redo

class UtilityClass {
    constructor(obj) {
        this.obj = obj
        this.stack = []
    }

    // set obj key value
    setKeyValue(key, value) {
        this.stack.unshift(["set", key, this.obj[key]])

        this.obj[key] = value
    }

    // get obj key value
    getKeyValue(key) {
        return this.obj[key] ? this.obj[key] : "NOPE"
    }

    // delete obj key value
    deleteKeyValue(key) {
        delete this.obj[key]
    }

    // undo 
    undo() {
        switch (this.stack[0][0]) {
            case "set":
                if (this.stack[0][2] !== undefined) {
                    this.setKeyValue(this.stack[0][1], this.stack[0][2])
                } else {
                    this.deleteKeyValue(this.stack[0][1])
                    console.log("DELETED", this.stack[0][1])
                }
                this.stack.shift()
                break;
        }
    }
}

let x = new UtilityClass({ "key": "value" })
console.log(x.obj)
x.setKeyValue("k", "y")
x.setKeyValue("k", "v")


console.log("failed get", x.getKeyValue("kkkk"))

console.log(x.obj)
console.log("stack before undos", x.stack)
x.undo()
x.undo()
console.log("after undo", x.obj)
