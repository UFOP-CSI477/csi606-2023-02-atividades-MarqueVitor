import { prisma } from "../../database/client.js";

export class GetByIdLocaisController {
  async handle(request, response) {
    const { id } = request.params;

    try {
      const local = await prisma.locais.findUnique({
        where: {
          id: parseInt(id),
        },
        select: {
          id: true,
          nome: true,
          rua: true,
          numero: true,
          complemento: true,
          cidade_id: true,
          cidade: {
            select: {
              id: true,
              nome: true,
              estado_id: true,
            },
          },
        },
      });
      if (!local) {
        return response.json({ error: "Local não encontrado" });
      }
      return response.json(local);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
