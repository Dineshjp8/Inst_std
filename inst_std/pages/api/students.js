import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const students = await prisma.student.findMany();
    res.json(students);
  }
}
