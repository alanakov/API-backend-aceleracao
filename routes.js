import express from "express";

const routes = express.Router();

const autores = [
    {id : 1, name : "Machado de Assis"},
    {id : 2, name : "Monteiro Lobato"},
    {id : 3, name : "Dan Brown"},
    {id : 4, name : "Maurício de Sousa"}
]

routes.get('/', (req, res) => {
    res.send("Hello World!");
});

routes.get('/autores', (request, response) => {
    response.json(autores);
});

routes.get(`/autores/:id`, (req, res) => {
    const id = Number(req.params.id);
    let encontrado;

    for (let i = 0; i < autores.length; i++){
        if (id == autores[i].id) {
            encontrado = autores[i]; 
        }
    }

    if (encontrado) {
        res.json(encontrado);
    } else {
        res.json("Autor não encontrado")
    }
});

export { routes as default };