import { prisma } from "../../database/client.js";
import bcrypt from 'bcrypt';

export class UpdateUserController{
    async handle(request,response){
        const {id,nome,email,senhaHash:senha} = request.body;

        try {

            const senhaHash = await bcrypt.hash(senha, 10);
            const users = await prisma.usuario.update({
                where:{
                    id:parseInt(id),
                },
                data:{
                    nome,
                    email,
                    senhaHash,
                },
            });
            return response.status(200).json(users);
        } catch (error) {
            return response.status(400).json(error);
      
        }
    }
}