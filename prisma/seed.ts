import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function Main() {
    const recepie = await prisma.recepie.create({
        data: {
            tittle: "Testee",
            body: "12345"
        }
    })
}

Main()