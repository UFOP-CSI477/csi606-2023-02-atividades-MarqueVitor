import { prisma } from "../../database/client.js";

export class GetAllLocaisController {
  async handle(request, response) {
    try {
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
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
