import { NextApiRequest,NextApiResponse } from "next";
import type {Book} from '../../../src/type'
import { prismaBookFindMany } from "../../../prisma/apis/books";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Book []>
){
    const books = await prismaBookFindMany();
    // const authors=await prisma.author.findMany();
    res.status(200).json(books);
}