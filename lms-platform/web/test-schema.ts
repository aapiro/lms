import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Testing Prisma connection...');

  try {
    await prisma.$connect();
    console.log('✅ Successfully connected to database');

    // Test a simple query
    const users = await prisma.user.findMany({ take: 1 });
    console.log(`Found ${users.length} user(s)`);

    await prisma.$disconnect();
    console.log('✅ Schema validation successful!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
