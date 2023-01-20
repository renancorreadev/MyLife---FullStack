import Fastify from 'fastify';
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify();
const prisma = new PrismaClient()

app.register(cors, {
  origin: '*',
})

app.get('/', async () => {
  const habits = await prisma.habit.findMany({
    where: { 
      title : {
        startsWith: "Beber"
      }
    }
  })

  return habits
})

app.listen({
  port: 3000,
}).then(() => {
  console.log("Server is running 🎸")
})