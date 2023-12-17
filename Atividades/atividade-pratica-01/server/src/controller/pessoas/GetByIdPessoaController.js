import { prisma } from "../../database/client.js";

export class GetByIdPessoaController {
  async handle(request, response) {
    const { id } = request.params;

    try {
      const pessoas = await prisma.pessoa.findUnique({
        where: {
          id: parseInt(id),
        },
        select: {
          id: true,
          nome: true,
          rua: true,
          numero: true,
          complemento: true,
          rg: true,
          cidade: {
            select: {
              nome: true,
            },
          },
          sangue: {
            select: {
              tipo: true,
              fator: true,
            },
          },
        },
      });

      if (!pessoas) {
        return response.json({ error: "Usuário não encontrado" });
      }
      return response.json(pessoas);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
