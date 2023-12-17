import { prisma } from "../../database/client.js";

export class UpdateDoacoesController {
  async handle(request, response) {
    const { id, pessoa_id, local_id, data } = request.body;

    try {
      const doar = await prisma.doacoes.update({
        where: {
          id: parseInt(id),
        },
        data: {
          pessoa: {
            connect: {
              id: parseInt(pessoa_id),
            },
          },
          local: {
            connect: {
              id: parseInt(local_id),
            },
          },
          data,
        },
      });

      return response.json(doar);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
