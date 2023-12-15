import { prisma } from "../../database/client.js";

export class UpdatePessoaController {
  async handle(request, response) {
    const { id, nome, rua, numero, complemento, rg, cidade_id, tipo_id } =
      request.body;

    const pessoas = await prisma.pessoa.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nome,
        rua,
        numero,
        complemento,
        rg,

        cidade: {
          connect: {
            id: parseInt(cidade_id),
          },
        },
        sangue: {
          connect: {
            id: parseInt(tipo_id),
          },
        },
      },
    });
    return response.json(pessoas);
  }
}
