import { prisma } from "../../database/client.js";

export class CreateFotoController{
    async handle(request,response){
        const {modelo,ano,imagens,idUsuario} = request.body;

        try {

            const foto = await prisma.fotos.create({
                data:{
                    modelo,
                    ano,
                    imagens,
                    idUsuario,
                }
            });
            return response.status(201).json(foto);
        } catch (error) {
            console.error(error);
            return response.status(400).json(error);    
        }
    }
}

