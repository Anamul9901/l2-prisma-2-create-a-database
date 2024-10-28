import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {

    // user er all post find (fluent api) 
    //[aikhane only user er post dakhabe, user er data show korbe nah]
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     }
    // }).post();

    
    // user er data + user er all post
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     },
    //     include: {
    //         post: true
    //     }
    // })
    // console.log(result)
}

relationalQueries();