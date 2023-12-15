import { prisma } from "../../database/client.js";

export class CreateSangueController {
  async handle(request, response) {
    const { tipo, fator } = request.body;

    const sangue = await prisma.tipos.create({
      data: {
        tipo,
        fator,
      },
    });
    return response.json(sangue);
  }
}
