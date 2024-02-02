import express, { response } from "express";
import { mainRouter } from "./routes/main.js";
import { userRouter } from "./routes/user.js";
import { fotoRouter } from "./routes/fotos.js";
import { comentRouter } from "./routes/comentario.js";
import cors from "cors";

const server = express();
const PORT = 7777;

//ROUTES
server.use(express.json());
server.use(cors());
server.use(mainRouter);
server.use(userRouter);
server.use(fotoRouter);
server.use(comentRouter);

server.listen(PORT, () => {
  console.log(`{SERVER} Server is runnig on port ${PORT}`);
});
