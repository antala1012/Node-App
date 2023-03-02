const express = require('express')

const port = 6252

const app = express()

app.get('/', (req, res) => {
    return res.status(200).json({ data: "Function Called." })
})

app.listen(port, () => {
    console.log("server is rinning in this port:", port);
})