const fs = require('node:fs')

const text = fs.readFileSync('./archivo.txt,', 'utf-8', (err, text) => {
    console.log(text)
})

console.log(text)