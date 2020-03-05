const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./routes');

mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-fba3g.mongodb.net/week10?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())  // LIBERA ACESSO PARA O FRONT END ACESSAR O BACKEND, É NECESSÁRIO INSTALAR (npm install cors)
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros: 
// Query Params: request.query(Filtros, ordenação, paginação ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)



