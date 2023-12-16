import { prisma } from "../../database/client.js";

export class DeleteLocaisController {
  async handle(request, response) {
    const { id } = request.body;
    try {
      const local = await prisma.locais.delete({
        where: {
          id: parseInt(id),
        },
      });

      return response.json(local);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
