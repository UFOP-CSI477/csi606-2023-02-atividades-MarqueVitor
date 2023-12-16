import { prisma } from "../../database/client.js";

export class DeleteDoacoesController {
  async handle(request, response) {
    const { id } = request.body;

    try {
      const doar = await prisma.doacoes.delete({
        where: {
          id: parseInt(id),
        },
      });

      return response.json(doar);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
