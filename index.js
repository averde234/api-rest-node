import "dotenv/config";
import express from "express";
const app = express();

app.use(express.json());

//app.get('/', (req, res) =>{
    //res.send("Bienvenidos a nuestra API REST");
//});

import propiedadesRouter from "./src/routes/propiedades.routes.js"
app.use('/api', propiedadesRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`escuchando puerto:${PORT}`));