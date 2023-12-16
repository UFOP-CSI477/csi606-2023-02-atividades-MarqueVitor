import express, { response } from "express";
import { estadoRouter } from "./routes/estados.js";
import { mainRouter } from "./routes/main.js";
import { cidadeRouter } from "./routes/cidades.js";
import { sanguineoRouter } from "./routes/sanguineo.js";
import { pessoasRouter } from "./routes/pessoas.js";
import { locaisRouter } from "./routes/locais.js";
import { doacaoRouter } from "./routes/doacoes.js";

const server = express();
const PORT = 5555;

//ROUTES
server.use(express.json());
server.use(mainRouter);
server.use(estadoRouter);
server.use(cidadeRouter);
server.use(sanguineoRouter);
server.use(pessoasRouter);
server.use(locaisRouter);
server.use(doacaoRouter);

server.listen(PORT, () => {
  console.log(`{SERVER} Server is runnig on port ${PORT}`);
});
