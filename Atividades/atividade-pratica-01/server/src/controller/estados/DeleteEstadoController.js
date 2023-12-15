import { prisma } from "../../database/client.js";

export class DeleteEstadoController {
  async handle(request, response) {
    const { id } = request.body;

    try {
      const estado = await prisma.estado.delete({
        where: {
          id: parseInt(id),
        },
      });
      return response.json(estado);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
