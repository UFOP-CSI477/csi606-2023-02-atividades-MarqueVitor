import { prisma } from "../../database/client.js";

export class GetByIdDoacoesController {
  async handle(request, response) {
    const { id } = request.params;

    const doar = await prisma.doacoes.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        pessoa: {
          select: {
            nome: true,
            rua: true,
            numero: true,
            complemento: true,
            rg: true,
            sangue: {
              select: {
                tipo: true,
                fator: true,
              },
            },
          },
        },
        local: {
          select: {
            nome: true,
            cidade: {
              select: {
                nome: true,
              },
            },
          },
        },
        data: true,
      },
    });

    return response.json(doar);
  }
}
