import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import {compare, hash } from'bcrypt'
import {randomUUID} from"node:crypto"
const app = Fastify()



interface IUser {
  id: string
  name: string
  username: string
  password: string
  email: string
}

async function signUp(
  request: FastifyRequest<{ Body: IUser }>,
  reply: FastifyReply

) {
  const newUser: IUser = {
  id: randomUUID(),
  password: await hash(request.body.password, 10),
  email: request.body.email,
  name: request.body.name,
  username: request.body.username
  
  }

  return reply.send(newUser)

}

// Declare a route
app.post('/user/signUp',signUp)


const start = async () => {
  try {
    await app.listen({ port: 3333, host: "0.0.0.0" });
    console.log(" Servidor rodando em http://localhost:3333");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();