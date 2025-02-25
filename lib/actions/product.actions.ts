'use server';
import { PrismaClient } from "@prisma/client";
import { prismaToPlainObj } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

//Ger latest products
export async function getLatestProducts() {
    const prisma = new PrismaClient();
    const data = await prisma.product.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        take: LATEST_PRODUCTS_LIMIT //limited to what I set in the products props
    }); 
    return prismaToPlainObj(data); //it's a prisma object, will need a utility function to convert it to a plain object
}