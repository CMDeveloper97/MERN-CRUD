const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors({ credentials: true, origin: true }));
app.options("*", cors());

app.use(express.json({extend: true}));

const port = process.env.port || 4000;

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tarea'));
 
app.listen(port, '0.0.0.0', () =>{
    console.log(`EL servidor esta funcionando en el puerto ${port}`);
})