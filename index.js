import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

import propiedadesRouter from "./src/routes/propiedades.routes.js";
app.use('/api', propiedadesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`escuchando puerto:${PORT}`));