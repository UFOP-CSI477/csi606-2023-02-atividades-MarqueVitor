import { prisma } from "../../database/client.js";

export class GetSangueController {
  async handle(request, response) {

    const sangue = await prisma.tipos.findMany();
    return response.json(sangue);
    
  }
}
