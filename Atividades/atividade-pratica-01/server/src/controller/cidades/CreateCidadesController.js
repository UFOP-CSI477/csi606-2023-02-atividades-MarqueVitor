import { prisma } from "../../database/client.js";

export class CreateCidadesController {
  async handle(request, response) {
    const { nome, estado_id } = request.body;

    try {
      const cidade = await prisma.cidade.create({
        data: {
          nome,
          estado: {
            connect: {
              id: estado_id,
            },
          },
        },
      });
      return response.json(cidade);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
