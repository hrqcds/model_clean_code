import { PrismaClient } from "@prisma/client";

export const prisma_db: PrismaClient = new PrismaClient({ log: ["query"] });
