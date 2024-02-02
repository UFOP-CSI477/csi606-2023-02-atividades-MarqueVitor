import { Router } from "express";

const mainRouter = Router();

mainRouter.get("/", (request, response) => {
    response.json({
      message: "Status: Server is running.",
    });
  });

export{mainRouter}