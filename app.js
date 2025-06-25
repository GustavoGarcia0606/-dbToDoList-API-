const express = require('express');
const cors=require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const tarefaRoutes = require('./routes/tarefaRoutes');
app.use('/tarefas', tarefaRoutes);

app.listen(300, () => {
    console.log(`Servidor rodando na porta `);
});