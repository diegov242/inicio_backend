const express = require("express")
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (request, response) => {
    response.send("Server on")
})

app.get("/api/v1/:userid", (request, response) => {
    console.log(request.params.userid);
    response.send(`el usuario es ${request.params.userid}`)
})

app.post("/api/v1/create/user", (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})

// app.delete("/api/v1/deleteuser", (request, response) => {
//     console.log(request.body);
//     response.status(200).send("borrado existosamente")
// })
app.listen(4000, () => { //esto siempre va a lo ultimo
    console.log("servidor corriendo en el puerto 4000")
})
