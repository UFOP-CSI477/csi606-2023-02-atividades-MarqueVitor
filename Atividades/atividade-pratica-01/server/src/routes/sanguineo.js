import { Router } from "express";
import { CreateSangueController } from "../controller/tiposangue/CreateSangueController.js";
import { GetSangueController } from "../controller/tiposangue/GetSangueController.js";
import { GetByIdSangueController } from "../controller/tiposangue/GetByIdSangueController.js";
import { UpdateSangueController } from "../controller/tiposangue/UpdateSangueController.js";
import { DeleteSangueController } from "../controller/tiposangue/DeleteSangueController.js";

const sanguineoRouter = Router();

// CRUD - tipos sanguineos

// Create
const createSangueController = new CreateSangueController();
sanguineoRouter.post("/tipos", createSangueController.handle);

// Get All
const getSangueController = new GetSangueController();
sanguineoRouter.get("/tipos", getSangueController.handle);

// Get By ID
const getByIdSangueController = new GetByIdSangueController();
sanguineoRouter.get("/tipos/:id", getByIdSangueController.handle);

// Update
const updateSangueController = new UpdateSangueController();
sanguineoRouter.put("/tipos", updateSangueController.handle);

//Delete
const deleteSangueController = new DeleteSangueController();
sanguineoRouter.delete("/tipos", deleteSangueController.handle);

export { sanguineoRouter };
