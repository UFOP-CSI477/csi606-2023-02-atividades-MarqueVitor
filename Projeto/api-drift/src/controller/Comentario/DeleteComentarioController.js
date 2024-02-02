import { prisma } from "../../database/client.js";

export class DeleteComentarioController{
    async handle(request,response){

        const {id} = request.body;

        if (isNaN(id) || id <= 0) {
            return response.status(400).json({ error: "ID inválido" });
        }

        try {
            const coment = await prisma.comentario.delete({
                where:{
                    id:parseInt(id),
                },
            });
            
        } catch (error) {
            return response.status(400).json(error); 
        }

    }
}