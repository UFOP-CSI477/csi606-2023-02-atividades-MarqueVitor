import { prisma } from "../../database/client.js";

export class GetByIdCidadeController {
  async handle(request, response) {
    const { id } = request.params;

    try {
      const cidades = await prisma.cidade.findUnique({
        where: {
          id: parseInt(id),
        },
        select: {
          id: true,
          nome: true,
          estado_id: true,
          estado: {
            select: {
              id: true,
              nome: true,
              sigla: true,
            },
          },
        },
      });
      if (!cidades) {
        return response.json({ error: "Cidade não encontrada" });
      }
      return response.json(cidades);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
