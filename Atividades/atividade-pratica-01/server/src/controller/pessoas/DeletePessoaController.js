import { prisma } from "../../database/client.js";

export class DeletePessoaController {
  async handle(request, response) {
    const { id } = request.body;
    try {
      const pessoas = await prisma.pessoa.delete({
        where: {
          id: parseInt(id),
        },
      });

      return response.json(pessoas);
    } catch (error) {
      console.error(error);
      return response.status(400).json(error);
    }
  }
}
