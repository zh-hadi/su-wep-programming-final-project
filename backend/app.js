const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()
const port = 3000

const pagesRouters = require('./routes/pages.routes')
const authRoutes = require('./routes/auth.routes')
const apiRoutes = require('./routes/api.routes')

app.use(express.json())
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(session({
    secret: "34514asdf52435243sdfasdfasd",
    resave: false,
    saveUninitialized: false, 
    cookie: { secure: false } 
}));

app.use("/", pagesRouters)
app.use("/api/auth", authRoutes)
app.use("/api", apiRoutes)


// app.get("/hadi", (req, res) => {
//     req.session.me = "my name is hadiuzzaman hadi";
//     return res.send("hello world form hadi");
// })

// app.get("/check", (req, res) => {
//     console.log(req.session.me);
//     return res.send("hi i am hadi");
// })

app.use((req, res, next) => {
    res.redirect("/dashboard");
});

app.listen(port, () => {
    console.log(`Project app port: ${port}`)
})