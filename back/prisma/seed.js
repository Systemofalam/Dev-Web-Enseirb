import 'dotenv/config'
import bcrypt from 'bcrypt'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from '../src/generated/prisma/client.ts'

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

const passwordHash = await bcrypt.hash('Passw0rd!', 10)

const alice = await prisma.user.upsert({
  where: { email: 'alice@example.org' },
  update: {},
  create: { email: 'alice@example.org', passwordHash },
})

console.log(`Compte démo : ${alice.email}`)
await prisma.$disconnect()