import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
    // const post = await prisma.$queryRaw`SELECT * from "posts" where true`;
    // console.log(post)


    // delete full database
    // full database ba database er table delete korte gele must row query use korte hobe.

    // delete users table data
    await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`

    // delete categorys table data
    await prisma.$queryRaw`TRUNCATE table "categorys" CASCADE`

}

rawQuery();