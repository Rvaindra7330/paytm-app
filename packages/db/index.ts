import { PrismaClient } from './generated/prisma/client'


const prisma: PrismaClient =
    (globalThis as unknown as { prisma?: PrismaClient }).prisma ??
    new PrismaClient({
        log: ["query", "warn", "error"] as const,
        accelerateUrl: process.env.DATABASE_ACCELERATE_URL ?? "",
    })


if (process.env.NODE_ENV !== "production") {
    ; (globalThis as unknown as { prisma?: PrismaClient }).prisma = prisma
}

export default prisma
export { prisma }