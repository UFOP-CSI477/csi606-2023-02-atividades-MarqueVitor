import { prisma } from "../../database/client.js";

export class GetByNomeLocaisController {
  async handle(request, response) {
    const { id, nome } = request.params;

    try {
      const local = await prisma.locais.findUnique({
        where: {
          id:parseInt(id),
          nome: nome,
        },
        select: {
          id: true,
          nome: true,
          rua: true,
          numero: true,
          complemento: true,
          cidade_id: true,
          cidade: {
            select: {
              id: true,
              nome: true,
              estado_id: true,
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
