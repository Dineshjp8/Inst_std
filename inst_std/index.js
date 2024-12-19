import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Home({ students }) {
  return (
    <div>
      <h1>Welcome to the Student Dashboard</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.cohort}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const students = await prisma.student.findMany();
  return {
    props: {
      students,
    },
  };
}
