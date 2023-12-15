import { prisma } from "../../database/client.js";

export class GetByIdCidadeController {
  async handle(request, response) {
    const { id } = request.params;

    const cidades = await prisma.cidade.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        estado: true,
      },
    });

    return response.json(cidades);
  }
}
