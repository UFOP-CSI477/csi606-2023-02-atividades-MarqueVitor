import { prisma } from "../../database/client.js";

export class GetByIdSangueController {
  async handle(request, response) {
    const { id } = request.params;

    try {
      const sangue = await prisma.tipos.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (!sangue) {
        return response.json({ error: "Tipo sanguineo não encontrado" });
      }
      return response.json(sangue);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
