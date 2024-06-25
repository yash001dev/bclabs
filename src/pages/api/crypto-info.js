import { cryptoData } from "@/mock/currency";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    //I commented this line because vercel free tier does not support long waiting time
    // const data = await prisma.crypto.findMany();
    const data = cryptoData;
    res.status(200).json(data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
