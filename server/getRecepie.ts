import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { z } from "zod";

const prisma = new PrismaClient()


export async function getRecepie(fastify: FastifyInstance){
    fastify.get('/recepies/count', async () => {
        
        const count = await prisma.recepie.findMany()

        return { count }
    })

    fastify.post('/getRecepieTittle', async (reponse, reply) => {
        const recepieTittle = z.object({
            tittle: z.string()
        })

        const { tittle } = recepieTittle.parse(reponse.body)
        
        try {
            await prisma.recepie.findUnique({
                where: {
                    tittle: "Bolo de Cenoura"
                }
            })
        } catch (error) {
            throw error
        }

        return reply.status(201).send()
    })
    
}