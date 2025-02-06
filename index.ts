import Fastify, { FastifyReply, FastifyRequest } from "fastify"
import { signIn, signUp } from "./src/routes/auth"
const app = Fastify()

// Declare a route
app.post("/auth/signup", signUp)
app.post("/auth/signin", signIn)

const start = async () => {
  try {
    await app.listen({ port: 3333, host: "0.0.0.0" })
    console.log(" Servidor rodando em http://localhost:3333")
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
