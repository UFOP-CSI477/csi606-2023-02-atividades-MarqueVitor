import { prisma } from "../../database/client.js";

export class GetAllUserController{
    async handle(request,response){
        try {

            const users = await prisma.usuario.findMany({
                select:{
                    id:true,
                    nome:true,
                    email:true,
                    fotos:{
                        select:{
                            id:true,
                            modelo:true,
                            ano:true,
                            imagens:true,
                        },
                    },
                    Comentario:{
                        select:{
                            comentario:true,
                        }
                    },
                },
            });
            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json(error);
        }

    }
}