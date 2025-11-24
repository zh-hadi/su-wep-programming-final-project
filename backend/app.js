const express = require('express')
const mysql = require('mysql')
const path = require('path')
const app = express()
const port = 3000

const pagesRouters = require('./routes/pages.routes')
const authRoutes = require('./routes/auth.routes')
const apiRoutes = require('./routes/api.routes')

app.use(express.json())
app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/", pagesRouters)
app.use("/api/auth", authRoutes)
app.use("/api", apiRoutes)



app.listen(port, () => {
    console.log(`Project app port: ${port}`)
})