import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { z } from "zod";

const prisma = new PrismaClient()


export async function getRecepie(fastify: FastifyInstance){
    fastify.get('/recepies/count', async () => {
        
        const count = await prisma.recepie.findMany()

        return { count }
    })
}