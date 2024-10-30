import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {

    const userNameArray = ["user1", "user2", "user3"];

    // aikhane 'userNameArray' er je je data name er sahte milbe se user gulu fetch korbe.
    // const userNamesByArray = await prisma.user.findMany({
    //     where: {
    //         username: {
    //             in: userNameArray
    //         }
    //     }
    // })
    // console.log(userNamesByArray);


    // find all relation data.
    // const inDepthData = await prisma.user.findUnique({
    //     where: {
    //         id: 3
    //     },
    //     include: {
    //         post: {
    //             include: {
    //                 postCategory: {
    //                     include: {
    //                         category: true
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // })
    // // console.log(inDepthData);
    // console.dir(inDepthData, {depth: Infinity})
}

filtering();