import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {

    // find avagre age
    // const avgAge = await prisma.user.aggregate({
    //     _avg: {
    //         age: true
    //     }
    // })
    // console.log(avgAge);


    // find sum of age
    // const sumAge = await prisma.user.aggregate({
    //     _sum: {
    //         age: true
    //     }
    // })
    // console.log(sumAge);


    // find count of age field
    // const countAge = await prisma.user.aggregate({
    //     _count: {
    //         age: true
    //     }
    // })
    // console.log(countAge);


    // find number of records
    // const countData = await prisma.user.count();
    // console.log(countData);


    // find max age
    // const maxAge = await prisma.user.aggregate({
    //     _max: {
    //         age: true
    //     }
    // })
    // console.log(maxAge);


    // find min age
    const minAge = await prisma.user.aggregate({
        _min: {
            age: true
        }
    })
    console.log(minAge);
}

aggregates();