import { Router } from "express";
import { CreateUserController } from "../controller/User/CreateUserController.js";
import { GetAllUserController } from "../controller/User/GetAllUserController.js";
import { GetByIdUserController } from "../controller/User/GetByIdUserController.js";
import { DeleteUserController } from "../controller/User/DeleteUserController.js";
import { UpdateUserController } from "../controller/User/UpdateUserController.js";
import { LoginUserController } from "../controller/User/LoginUserController.js";

const userRouter = Router();

// CRUD - User

//CREATE

const createUserController = new CreateUserController();
userRouter.post("/user",createUserController.handle);

// GET ALL

const getAllUserController = new GetAllUserController();
userRouter.get("/user",getAllUserController.handle);

// GET BY ID 

const getByIdUserController = new GetByIdUserController();
userRouter.get("/user/:id",getByIdUserController.handle);

//DELETE

const deleteUserController = new DeleteUserController();
userRouter.delete("/user",deleteUserController.handle);

// UPDATE

const updateUserController = new UpdateUserController();
userRouter.put("/user",updateUserController.handle);

//LOGIN
const loginUserController = new LoginUserController();
userRouter.post("/login",loginUserController.handle);

export {userRouter}