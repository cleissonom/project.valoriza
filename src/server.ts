import express from "express";

// @types/express
const app = express();

/*
   GET    => Buscar uma informação
   POST   => Inserir (Criar) uma informação
   PUT    => Alterar uma informação
   DELETE => Remover um dado
   PATCH  => Alterar uma informação específica
*/

app.get('/test', (req, res) => {
   // Reqeust => Entrando
   // Response => Saindo
   return res.send('Olá Cleisson')
});

app.post('/testpost', (req, res) => {
   return res.send('Olá Cleisson method POST')
})

// http://localhost:3000
app.listen(3000, () => console.log('Server running...'))