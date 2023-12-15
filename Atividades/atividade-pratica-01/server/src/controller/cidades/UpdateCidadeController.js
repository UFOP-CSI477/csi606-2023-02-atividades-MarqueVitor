import { prisma } from "../../database/client.js";

export class UpdateCidadeController {
  async handle(request, response) {
    const { id, nome, estado_id } = request.body;

    const cidades = await prisma.cidade.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nome,
        updated_at: new Date(),
        estado: {
          connect: {
            id: parseInt(estado_id),
          },
        },
      },
    });
    return response.json(cidades);
  }
}
