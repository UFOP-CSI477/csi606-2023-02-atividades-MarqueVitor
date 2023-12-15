import { prisma } from "../../database/client.js";

export class GetByNomePessoaController {
  async handle(request, response) {
    const { nome } = request.params;

    const pessoas = await prisma.pessoa.findUnique({
      where: {
        nome: nome,
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
  }
}
