import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function Main() {
    const recepie = await prisma.recepie.create({
        data: {
            tittle: "Teste",
            body: "1234"
        }
    })
}

Main()