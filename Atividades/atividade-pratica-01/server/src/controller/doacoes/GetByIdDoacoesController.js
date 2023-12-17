import { prisma } from "../../database/client.js";

export class GetByIdDoacoesController {
  async handle(request, response) {
    const { id } = request.params;

    try {
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
      if (!doar) {
        return response.json({ error: "Doação não encontrada" });
      }
      return response.json(doar);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
