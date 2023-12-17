import { prisma } from "../../database/client.js";

export class CreateLocaisController {
  async handle(request, response) {
    const { nome, rua, numero, complemento, cidade_id } = request.body;

    try {
      const local = await prisma.locais.create({
        data: {
          nome,
          rua,
          numero,
          complemento,
          cidade: {
            connect: {
              id: cidade_id,
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
