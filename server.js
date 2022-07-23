const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// rotas
const linkRouter = require('./routes/linkRouter')

// server arquivo .env
require('dotenv').config()

// database connect 
const URL = process.env.DB_MINEATLAS;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopoLogy: true })

let db = mongoose.connection;
db.on("error", () => { console.log("houve um error") });
db.once("open", () => { console.log("Banco aberto") });

// configuração dos cors e do body-parser
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// todas as rotas invalidas vão dar para o index
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html', function (error) {
        if (error) {
            res.status(500).send(error)
        }
    }))
})

app.use('/', linkRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta: " + PORT);
});