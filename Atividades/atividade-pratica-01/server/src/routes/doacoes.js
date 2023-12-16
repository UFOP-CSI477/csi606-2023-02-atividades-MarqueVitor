import { Router } from "express";
import { CreateDoacoesController } from "../controller/doacoes/CreateDoacoesController.js";
import { GetAllDoacoesController } from "../controller/doacoes/GetAllDoacoesController.js";
import { GetByIdDoacoesController } from "../controller/doacoes/GetByIdDoacoesController.js";
import { UpdateDoacoesController } from "../controller/doacoes/UpdateDoacoesController.js";
import { DeleteDoacoesController } from "../controller/doacoes/DeleteDoacoesController.js";

const doacaoRouter = Router();

// Crud - doações

// Create
const createDoacoesController = new CreateDoacoesController();
doacaoRouter.post("/doacoes", createDoacoesController.handle);

// Get All
const getAllDoacoesController = new GetAllDoacoesController();
doacaoRouter.get("/doacoes", getAllDoacoesController.handle);

// Get By ID
const getByIdDoacoesController = new GetByIdDoacoesController();
doacaoRouter.get("/doacoes/:id", getByIdDoacoesController.handle);

// Update
const updateDoacoesController = new UpdateDoacoesController();
doacaoRouter.put("/doacoes", updateDoacoesController.handle);

// Delete
const deleteDoacoesController = new DeleteDoacoesController();
doacaoRouter.delete("/doacoes", deleteDoacoesController.handle);

export { doacaoRouter };
