import { prisma } from "../../database/client.js";

export class GetByIdFotoController{
    async handle(request,response){

        const {id} = request.params;

        try {

            const fotos = await prisma.fotos.findUnique({
                where:{
                    id:parseInt(id)
                },
                select:{
                    id:true,
                    modelo:true,
                    ano:true,
                    imagens:true,
                    usuario:{
                        select:{
                            id:true,
                            nome:true,
                        },
                    },
                    comentarios:{
                        select:{
                            id:true,
                            idUsuario:true,
                            idFoto:true,
                            comentario:true,
                            usuario:{
                                select:{
                                    nome:true
                                },
                            },
                        },
                    },
                },   
            });
            return response.status(200).json(fotos);
        } catch (error) {
            return response.status(400).json(error);
            
        }
    }
}