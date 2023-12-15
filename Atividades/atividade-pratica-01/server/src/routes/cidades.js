import { Router } from "express";
import { CreateCidadesController } from "../controller/cidades/CreateCidadesController.js";
import { GetAllCidadeController } from "../controller/cidades/GetAllCidadeController.js";
import {GetByIdCidadeController} from "../controller/cidades/GetByIdCidadeController.js";
import { UpdateCidadeController } from "../controller/cidades/UpdateCidadeController.js";
import { DeleteCidadeController } from "../controller/cidades/DeleteCidadeController.js";

const cidadeRouter = Router();

//Create
const createCidadesController = new CreateCidadesController();
cidadeRouter.post("/cidades", createCidadesController.handle);

// Get
const getAllCidade = new GetAllCidadeController();
cidadeRouter.get("/cidades", getAllCidade.handle);

// Get By ID
const getByIdCidadeController = new GetByIdCidadeController();
cidadeRouter.get("/cidades/:id", getByIdCidadeController.handle);

// Update
const updateCidadeController = new UpdateCidadeController();
cidadeRouter.put("/cidades", updateCidadeController.handle);

// Delete

const deleteCidadeController = new DeleteCidadeController();
cidadeRouter.delete("/cidades", deleteCidadeController.handle);

export { cidadeRouter };
