import { prisma } from "../../database/client.js";

export class DeleteSangueController {
  async handle(request, response) {
    const { id } = request.body;

    try {
      const sangue = await prisma.tipos.delete({
        where: {
          id: parseInt(id),
        },
      });
      return response.json(sangue);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
