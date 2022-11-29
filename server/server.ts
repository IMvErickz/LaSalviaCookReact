import Fastify from "fastify";
import Cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import shortUniqueId from 'short-unique-id'

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

    fastify.get('/AdcionarReceita/count', async () => {
        const add = await prisma.recepie.findMany()
        return {add}
    })

    fastify.post('/AdcionarReceita', async (request, reply) => {
        const createRecepieBody = z.object({
            tittle: z.string(),
            body: z.string()
        })
        const { tittle } = createRecepieBody.parse(request.body)
        const { body } = createRecepieBody.parse(request.body)


        await prisma.recepie.create({
            data: {
                tittle,
                body,
            }
        })
        return reply.status(201)

    })

    await fastify.listen({port: 4800})

   
}

start()
