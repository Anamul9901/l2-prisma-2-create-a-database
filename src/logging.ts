import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query"
        }
    ]
});


// ai log er maddhome bujte parbo Row query, koto time lagse, timestamp
prisma.$on("query", e => {
    // console.log(e);
    console.log("Query:", e.query);
    console.log("Duration:", e.duration,"ms");
    console.log("Date & Time:", e.timestamp);
})


const main = async () => {

    const getAllFromDB = await prisma.post.findMany();
    // console.log(getAllFromDB)
}

main();