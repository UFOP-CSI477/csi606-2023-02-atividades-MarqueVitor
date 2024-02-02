import { prisma } from "../../database/client.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export class LoginUserController {
  async handle(request, response) {
    const { email, senha } = request.body;

    try {
        const user = await prisma.usuario.findFirst({
          where: {
            email: email,
          },
        });
    
        if (user && await bcrypt.compare(senha, user.senhaHash)) {

        // Usuário autenticado com sucesso
          const { id, nome, email } = user; // Apenas as informações necessárias

        // Cria um token JWT com as informações do usuário
           const token = jwt.sign({ userId: id, userEmail: email }, 'secretSafe', { expiresIn: '8h' });

          response.json({ success: true, token, user: { id, nome, email } });
        } else {
          // Credenciais inválidas
          response.status(401).json({ success: false, message: 'Credenciais inválidas' });
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        response.status(500).json({ error: 'Erro interno do servidor' });
      }

   
  }
}
