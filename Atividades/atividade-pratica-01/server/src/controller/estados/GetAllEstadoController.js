import { prisma } from "../../database/client.js";

export class GetAllEstadoController {
  async handle(request, response) {
    
    try {
      const estados = await prisma.estado.findMany({
        include: {
          cidade: {
            select: {
              id: true,
              nome: true,
            },
          },
        },
      });
      return response.json(estados);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
