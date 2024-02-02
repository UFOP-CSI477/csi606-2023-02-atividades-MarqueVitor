import { prisma } from "../../database/client.js";

export class UpdateComentarioController{
    async handle(request,response){

        const {id,idUsuario,idFoto,comentario} = request.body;

        try {
            const coment = await prisma.comentario.update({
                where:{
                    id:parseInt(id),
                },
                data:{
                    idUsuario,
                    idFoto,
                    comentario,
                },
            });
            
            return response.status(200).json(coment);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}