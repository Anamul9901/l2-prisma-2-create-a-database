import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {

    // const groupPost1 = await prisma.post.groupBy({
    //     by: ['published', 'authorId'],
    // });
    // console.log(groupPost1);


    const groupPost2 = await prisma.post.groupBy({
        by: ['published', 'authorId'],

        _count: {
            title: true
        },

        // where and having pry same e. ekhe dhoroner kaj kore
        // where: {
        //     published: true
        // }
        having: {
            // published: true

            // joto gulu group ase, tader protek group er authorId gulur sum 1 theke base hole dekhabe
            authorId: {
                _sum: {
                    gt: 1
                }
            }
        },
    });
    console.log(groupPost2);
}

groupBy();