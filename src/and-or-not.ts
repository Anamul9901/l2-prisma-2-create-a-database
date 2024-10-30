import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {

    // and filtering
    // const andFiltering = await prisma.post.findMany({
    //     where: {
    //         AND: [
    //             {
    //                 title: {
    //                     contains: "title"
    //                 }
    //             },
    //             {
    //                 published: true
    //             }
    //         ]
    //     }
    // })
    // console.log(andFiltering);


    // or filtering
    // const orFiltering = await prisma.post.findMany({
    //     where: {
    //         OR: [
    //             {
    //                 title: {
    //                     contains: "title"
    //                 }
    //             },
    //             {
    //                 published: false
    //             }
    //         ]
    //     }
    // })
    // console.log(orFiltering)

    // jey post er title key e "title" lekha ase oi post debe nah
    // const notFiltering = await prisma.post.findMany({
    //     where: {
    //         NOT: [
    //             {
    //                 title: {
    //                     contains: 'title'
    //                 }
    //             }
    //         ]
    //     }
    // })
    // console.log(notFiltering)


    // je user er email 'us' deye satrt only se users gulu dekhabe
    const startsWith = await prisma.user.findMany({
        where: {
            email: {
                // startsWith: 'us'
                // endsWith: "com"
                equals: "user1@gmail.com"  // full match hote hobe
            }
        }
    })
    console.log(startsWith)
}

filtering();