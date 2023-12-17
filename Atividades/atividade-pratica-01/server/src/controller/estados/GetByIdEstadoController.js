import { prisma } from "../../database/client.js";

export class GetByIdEstadoController {
  async handle(request, response) {
    const { id } = request.params;

    try {
      const estado = await prisma.estado.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (!estado) {
        return response.json({ error: "Estado não encontrado" });
      }
      return response.json(estado);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
