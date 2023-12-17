import { Router } from "express";
import { CreateLocaisController } from "../controller/locais/CreateLocaisController.js";
import { GetAllLocaisController } from "../controller/locais/GetAllLocaisController.js";
import { GetByIdLocaisController } from "../controller/locais/GetByIdLocaisController.js";
import { GetByNomeLocaisController } from "../controller/locais/GetByNomeLocaisController.js";
import { UpdateLocaisController } from "../controller/locais/UpdateLocaisController.js";
import { DeleteLocaisController } from "../controller/locais/DeleteLocaisController.js";

const locaisRouter = Router();

//CRUD - locais

// Create
const createLocaisController = new CreateLocaisController();
locaisRouter.post("/locais", createLocaisController.handle);

// Get All
const getAllLocaisController = new GetAllLocaisController();
locaisRouter.get("/locais", getAllLocaisController.handle);

// Get By Id
const getByIdLocaisController = new GetByIdLocaisController();
locaisRouter.get("/locais/:id", getByIdLocaisController.handle);

// Get By nome
const getByNomeLocaisController = new GetByNomeLocaisController();
locaisRouter.get("/locais/nome/:nome/:id", getByNomeLocaisController.handle);

// Update
const updateLocaisController = new UpdateLocaisController();
locaisRouter.put("/locais", updateLocaisController.handle);

// Delete
const deleteLocaisController = new DeleteLocaisController();
locaisRouter.delete("/locais", deleteLocaisController.handle);

export { locaisRouter };
