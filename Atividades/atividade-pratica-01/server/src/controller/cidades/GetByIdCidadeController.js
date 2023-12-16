import { prisma } from "../../database/client.js";

export class GetByIdCidadeController {
  async handle(request, response) {
    const { id } = request.params;

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

    return response.json(cidades);
  }
}
