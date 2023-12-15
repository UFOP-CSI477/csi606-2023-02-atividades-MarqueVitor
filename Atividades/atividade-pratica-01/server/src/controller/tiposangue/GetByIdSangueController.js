import { prisma } from "../../database/client.js";

export class GetByIdSangueController {
  async handle(request, response) {
    const { id } = request.params;

    const sangue = await prisma.tipos.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    return response.json(sangue);
  }
}
