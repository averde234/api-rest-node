import express from "express";
const app = express();

//app.use((req, res, next) =>{
    //res.json({messge: "Hola middleware"})
//});

//app.get('/', (req, res) =>{
   // res.send("Bienvenidos a nuestra API REST");
//});

import notFound from "./src/middlewares/not-found.js";
app.use(notFound)

const PORT = 3000;

app.listen(PORT, () => console.log(`escuchando puerto:${PORT}`));