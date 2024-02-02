import { prisma } from "../../database/client.js";

export class GetAllComentarioController{
    async handle(request,response){

        try {
            const coment = await prisma.comentario.findMany({
                select:{
                    id:true,
                    idUsuario:true,
                    idFoto:true,
                    comentario:true,
                    usuario:{
                        select:{
                            nome:true,
                        },
                    },
                },
            });
            return response.status(201).json(coment);
        } catch (error) {
            return response.status(400).json(error); 
        }
    }
}