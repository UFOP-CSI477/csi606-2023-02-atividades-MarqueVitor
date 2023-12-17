import { prisma } from "../../database/client.js";

export class CreatePessoaController {
  async handle(request, response) {
    const { nome, rua, numero, complemento, rg, cidade_id, tipo_id } =
      request.body;

    try {
      const pessoas = await prisma.pessoa.create({
        data: {
          nome,
          rua,
          numero,
          complemento,
          rg,
          cidade: {
            connect: {
              id: cidade_id,
            },
          },
          sangue: {
            connect: {
              id: tipo_id,
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
