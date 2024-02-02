import { prisma } from "../../database/client.js";

export class UpdateFotoController{
    async handle(request,response){

        const {id,modelo,ano,imagens,idUsuario} = request.body;

        try {

            const foto = await prisma.fotos.update({
                where:{
                    id:parseInt(id),
                },
                data:{
                    modelo,
                    ano,
                    imagens,
                    idUsuario,
                },
            });

            return response.status(200).json(foto);
        } catch (error) {
            return response.status(400).json(error);
        }

    }
}