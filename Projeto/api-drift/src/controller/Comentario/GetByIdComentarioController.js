import { prisma } from "../../database/client.js";

export class GetByIdComentarioController{
    async handle(request,response){

        const {id} = request.params;

        try {
            const coment = await prisma.comentario.findUnique({
                where:{
                    id:parseInt(id),
                },
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