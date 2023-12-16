import { prisma } from "../../database/client.js";

export class GetByIdLocaisController {
  async handle(request, response) {
    const { id } = request.params;

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
    return response.json(local);
  }
}
