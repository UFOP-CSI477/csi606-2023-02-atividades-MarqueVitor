import { prisma } from "../../database/client.js";

export class GetByNomePessoaController {
  async handle(request, response) {
    const { id, nome } = request.params;

    try {
      const pessoas = await prisma.pessoa.findUnique({
        where: {
          id:parseInt(id),
          nome:nome
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
      return response.json(pessoas);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
