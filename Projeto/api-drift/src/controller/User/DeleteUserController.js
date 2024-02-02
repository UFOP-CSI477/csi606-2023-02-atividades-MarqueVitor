import { prisma } from "../../database/client.js";

export class DeleteUserController{
    async handle(request,response){

        const {id} = request.body;

        if (isNaN(id) || id <= 0) {
            return response.status(400).json({ error: "ID inválido" });
        }

        try {
            const users = await prisma.usuario.delete({
                where:{
                    id:parseInt(id),
                },
            });

            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json(error); 
        }
    }
}