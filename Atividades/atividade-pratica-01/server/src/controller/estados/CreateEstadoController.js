import { prisma } from "../../database/client.js";

export class CreateEstadoController {
  async handle(request, response) {
    const { nome, sigla } = request.body;

    try {
      const estado = await prisma.estado.create({
        data: {
          nome,
          sigla,
        },
      });
      return response.json(estado);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
