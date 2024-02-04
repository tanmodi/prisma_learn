const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: "tanmay2",
//       email: "tanmay2@example.com"
//     }
//   })
//   console.log(user)
// }

async function main() {
    const user = await prisma.user.findMany({
      where: {
        name: "tanmay"
      }
    })
    console.log(user)
}
main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
