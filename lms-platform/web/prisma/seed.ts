import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      passwordHash: hashSync('password', 10),
      role: 'ADMIN'
    }
  });

  // Create demo course
  const course = await prisma.course.upsert({
    where: { slug: 'demo-course' },
    update: {},
    create: {
      title: 'Demo Course',
      slug: 'demo-course',
      description: 'A sample course for demonstration purposes',
      status: 'PUBLISHED',
      visibility: 'PUBLIC'
    }
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
