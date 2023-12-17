import { prisma } from "../../database/client.js";

export class UpdateSangueController {
  async handle(request, response) {
    const { id, tipo, fator } = request.body;

    try {
      const sangue = await prisma.tipos.update({
        where: {
          id: parseInt(id),
        },
        data: {
          tipo,
          fator,
          update_at: new Date(),
        },
      });

      return response.json(sangue);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
