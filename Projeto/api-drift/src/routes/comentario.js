import { Router } from "express";
import { CreateComentarioController } from "../controller/Comentario/CreateComentarioController.js";
import { GetAllComentarioController } from "../controller/Comentario/GetAllComentarioController.js";
import { GetByIdComentarioController } from "../controller/Comentario/GetByIdComentarioController.js";
import { DeleteComentarioController } from "../controller/Comentario/DeleteComentarioController.js";
import { UpdateComentarioController } from "../controller/Comentario/UpdateComentarioController.js";

const comentRouter = Router();


// CRUD - Comentario

// CREATE

const createComentarioController = new CreateComentarioController();
comentRouter.post("/coment",createComentarioController.handle);

// GET ALL
const getAllComentarioController = new GetAllComentarioController();
comentRouter.get("/coment",getAllComentarioController.handle);

// GET BY ID
const getByIdComentarioController = new GetByIdComentarioController();
comentRouter.get("/coment/:id",getByIdComentarioController.handle);

// DELETE 
const deleteComentarioController = new DeleteComentarioController();
comentRouter.delete("/coment",deleteComentarioController.handle);

// UPDATE 
const updateComentarioController = new UpdateComentarioController();
comentRouter.put("/coment",updateComentarioController.handle);


export {comentRouter}