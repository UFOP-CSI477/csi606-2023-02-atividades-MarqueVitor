import { prisma } from "../../database/client.js";
import bcrypt from 'bcrypt';


export class CreateUserController{
    async handle(request,response){
        const {nome,email,senhaHash:senha} = request.body;

        try {

            const senhaHash = await bcrypt.hash(senha, 10);
            const users = await prisma.usuario.create({
                data:{
                    nome,
                    email, 
                    senhaHash,
                }
            });
            return response.status(201).json(users);
        } catch (error) {
            console.error(error);
            return response.status(400).json(error);
        }
    }
}