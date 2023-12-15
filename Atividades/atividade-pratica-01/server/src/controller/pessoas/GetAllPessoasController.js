import { prisma } from "../../database/client.js";

export class GetAllPessoasController {
  async handle(request, response) {
    const pessoas = await prisma.pessoa.findMany({
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
