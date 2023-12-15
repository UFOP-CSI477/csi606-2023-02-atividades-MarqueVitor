import { Router } from "express";
import { CreatePessoaController } from "../controller/pessoas/CreatePessoaController.js";
import { GetAllPessoasController } from "../controller/pessoas/GetAllPessoasController.js";
import { GetByIdPessoaController } from "../controller/pessoas/GetByIdPessoaController.js";
import { GetByNomePessoaController } from "../controller/pessoas/GetByNomePessoaController.js";
import { UpdatePessoaController } from "../controller/pessoas/UpdatePessoaController.js";
import { DeletePessoaController } from "../controller/pessoas/DeletePessoaController.js";

const pessoasRouter = Router();

// CRUD pessoas

// Create
const createPessoaController = new CreatePessoaController();
pessoasRouter.post("/pessoa", createPessoaController.handle);

// Get All
const getAllPessoasController = new GetAllPessoasController();
pessoasRouter.get("/pessoa", getAllPessoasController.handle);

// Get By Id
const getByIdPessoaController = new GetByIdPessoaController();
pessoasRouter.get("/pessoa/:id", getByIdPessoaController.handle);

// Get By Nome
//const getByNomePessoaController = new GetByNomePessoaController();
//pessoasRouter.get("/pessoa/:nome", getByNomePessoaController.handle)

// Update
const updatePessoaController = new UpdatePessoaController();
pessoasRouter.put("/pessoa", updatePessoaController.handle);

// Delete
const deletePessoaController = new DeletePessoaController();
pessoasRouter.delete("/pessoa", deletePessoaController.handle);

export { pessoasRouter };
