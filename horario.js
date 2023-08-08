const express = require("express")
const router = express.Router()

const app = express()
const porta = 3000

function mostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/horario', mostraHora))
app.listen(porta, mostraPorta)