import { prisma } from "../../database/client.js";

export class CreateDoacoesController {
  async handle(request, response) {
    const { pessoa_id, local_id, data } = request.body;

    // Utilizar  o formato ISO-8601 DateTime.

    try {
      const doar = await prisma.doacoes.create({
        data: {
          pessoa: {
            connect: {
              id: pessoa_id,
            },
          },
          local: {
            connect: {
              id: local_id,
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
