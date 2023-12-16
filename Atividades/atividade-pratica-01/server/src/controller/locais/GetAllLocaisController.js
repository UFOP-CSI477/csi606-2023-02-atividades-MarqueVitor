import { prisma } from "../../database/client.js";

export class GetAllLocaisController {
  async handle(request, response) {
    const local = await prisma.locais.findMany({
      select: {
        id: true,
        nome: true,
        rua: true,
        numero: true,
        complemento: true,
        cidade: {
          select: {
            nome: true,
          },
        },
      },
    });

    return response.json(local);
  }
}
