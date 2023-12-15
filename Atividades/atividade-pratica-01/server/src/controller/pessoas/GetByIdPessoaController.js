import { prisma } from "../../database/client.js";

export class GetByIdPessoaController {
  async handle(request, response) {
    const { id } = request.params;

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

    return response.json(pessoas);
  }
}
