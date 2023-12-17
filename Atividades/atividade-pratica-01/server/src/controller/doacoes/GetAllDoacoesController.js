import { prisma } from "../../database/client.js";

export class GetAllDoacoesController {
  async handle(request, response) {
    try {
      const doar = await prisma.doacoes.findMany({
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
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
