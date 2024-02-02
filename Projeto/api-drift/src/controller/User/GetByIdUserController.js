import { prisma } from "../../database/client.js";

export class GetByIdUserController{
    async handle(request,response){

        const {id} = request.params;

        try {
            const users = await prisma.usuario.findUnique({
                where:{
                    id:parseInt(id),
                },
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