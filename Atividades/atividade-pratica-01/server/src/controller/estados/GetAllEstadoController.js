import { prisma } from "../../database/client.js";

export class GetAllEstadoController {
  async handle(request, response) {
    const estados = await prisma.estado.findMany({
      include:{
        cidade:{
          select:{
            id:true,
            nome:true
          }
        }
      }
    });
    return response.json(estados);
  }
}
