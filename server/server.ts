import Fastify from "fastify";
import Cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import {z} from 'zod'

const prisma = new PrismaClient({
    log: ['query']
})

async function start() {
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(Cors, {
        origin: true
    })

    fastify.get('/AdcionarReceita', async () => {
        const add = await prisma.recepie.count()
        return {add}
    })

    fastify.post('/receita', async (request, reply) => {
        const createRecepieBody = z.object({
            tittle: z.string()
        })
        const { tittle } = createRecepieBody.parse(request.body)

        await prisma.recepie.create({
            data: {
                tittle
            }
        })
    })

    await fastify.listen({port: 4800})

   
}

start()
