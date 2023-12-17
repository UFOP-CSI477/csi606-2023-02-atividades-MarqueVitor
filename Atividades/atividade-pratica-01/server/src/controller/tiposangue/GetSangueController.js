import { prisma } from "../../database/client.js";

export class GetSangueController {
  async handle(request, response) {
    
    try {
      const sangue = await prisma.tipos.findMany();
      return response.json(sangue);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
