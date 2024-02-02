import { prisma } from "../../database/client.js";

export class GetAllFotosController{
    async handle(request,response){

        try {
            const foto = await prisma.fotos.findMany({
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
                        },
                    },
                },
            });
            return response.status(200).json(foto);
        } catch (error) {
            return response.status(400).json(error);
            
        }
    }
}