import { prisma } from "../../database/client.js";

export class UpdateLocaisController {
  async handle(request, response) {
    const { id, nome, rua, numero, complemento, cidade_id } = request.body;

    try {
      const local = await prisma.locais.update({
        where: {
          id: parseInt(id),
        },
        data: {
          nome,
          rua,
          numero,
          complemento,
          cidade: {
            connect: {
              id: parseInt(cidade_id),
            },
          },
        },
      });

      return response.json(local);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
