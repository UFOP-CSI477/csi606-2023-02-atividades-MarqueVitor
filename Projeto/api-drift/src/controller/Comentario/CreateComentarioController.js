import { prisma } from "../../database/client.js";

export class CreateComentarioController{
    async handle(request,response){

        const {comentario,idFoto,idUsuario} = request.body;

        try {
            
            const coment = await prisma.comentario.create({
                data:{
                    comentario,
                    idFoto,
                    idUsuario,
                },

            });
            
            return response.status(201).json(coment);
        } catch (error) {
            return response.status(400).json(error); 
        }

    }
}