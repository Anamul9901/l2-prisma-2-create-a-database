import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// success hole all success hobe, r ekta unsuccess hole all unseccess hobe
const batchTransaction = async () => {

    const createUser = prisma.user.create({
        data: {
            username: "priZzo1",
            email: "prizzo1@gmail.com"
        }
    })
    // console.log("create user", createUser);

    const updateUser = prisma.user.update({
        where: {
            id: 4
        },
        data: {
            age: 30
        }
    })
    // console.log('update user', updateUser)
// aikhane je konu ekta query kaj na korle onno ektao kaj korbe nah. sobgulu kaj korle e function kaj korbe
    const [userData, updatedData] = await prisma.$transaction([
        createUser,
        updateUser
    ])
    console.log(userData, updatedData)
}

batchTransaction();