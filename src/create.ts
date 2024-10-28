import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const create = async () => {

    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user2",
    //         email: "user2@gmail.com",
    //         role: UserRole.user
    //     }
    // })
    // console.log(createUser);


    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is bio ...",
    //         userId: 1
    //     }
    // })
    // console.log(createProfile);


    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "softwer engineering"
    //     }
    // })
    // console.log(createCategory);


    const createPost = await prisma.post.create({
        data: {
            title: "this is title 5",
            content: "this is content 5",
            authorId: 1,
            postCategory: {
                // just ekta category add korle
                // create: {
                //     categoryId: 3
                //     // relation key category (not category) deye data create
                //     // category: {
                //     //     connect: {
                //     //         id: 1
                //     //     }
                //     // }
                // }

                // onkgula category add korle
                create: [
                    {
                        categoryId: 1
                    },
                    {
                        categoryId: 3
                    },
                    {
                        categoryId: 4
                    }
                ]
            }
        },
        // include user korar karone postCategory je crete hoise oitao console.log e dekhabe
        include: {
            postCategory: true
        }
    })
    console.log(createPost)

}

create();