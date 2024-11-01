import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () =>{
    // success hole all success hobe, r ekta unsuccess hole all unseccess hobe
    
    const result = await prisma.$transaction(async (transactionClient)=>{

        //query
        const getAllPost = await transactionClient.post.findMany({
            where: {
                published: true
            }
        })

        //query 2
        const countUser = await transactionClient.user.count();

        // query 3
        const updateUser = await transactionClient.user.update({
            where: {
                id: 6
            },
            data: {
                age: 45
            }
        });
        return {
            getAllPost,
            countUser,
            updateUser
        }
    });

    console.log(result);

}

interactiveTransaction();