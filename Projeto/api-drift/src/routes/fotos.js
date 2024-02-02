import { Router } from "express";
import { CreateFotoController } from "../controller/Fotos/CreateFotoController.js";
import { GetAllFotosController } from "../controller/Fotos/GetAllFotosController.js";
import { GetByIdFotoController } from "../controller/Fotos/GetByIdFotoController.js";
import { DeleteFotoController } from "../controller/Fotos/DeleteFotoController.js";
import { UpdateFotoController } from "../controller/Fotos/UpdateFotoController.js";

const fotoRouter = Router();

// CRUD - Fotos

// CREATE

const  createFotoController = new CreateFotoController();
fotoRouter.post("/foto",createFotoController.handle);

// GET ALL

const getAllFotosController = new GetAllFotosController();
fotoRouter.get("/foto",getAllFotosController.handle);

// GET BY ID

const getByIdFotoController = new GetByIdFotoController();
fotoRouter.get("/foto/:id",getByIdFotoController.handle);

// DELETE

const deleteFotoController = new DeleteFotoController();
fotoRouter.delete("/foto",deleteFotoController.handle);

// UPDATE

const updateFotoController = new UpdateFotoController();
fotoRouter.put("/foto",updateFotoController.handle);

export {fotoRouter}