const express = require("express")
const router = express.Router()

const app = express()
const porta = 3000

function mostraOla(request, response) {
    response.send("Olá, mundo!")
}

app.use(router.get('/ola', mostraOla))

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta)