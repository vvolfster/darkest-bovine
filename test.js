const { seededMoo } = require("./dist")

function start() {
    const myMoo = seededMoo("hello world")
    for (let i = 0; i < 50; i++) {
        console.log(i, myMoo(true))
    }
}

start()
