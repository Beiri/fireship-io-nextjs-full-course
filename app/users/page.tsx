import UserCard from '@/components/UserCard/UserCard';
import styles from './page.module.css';
import { prisma } from '@/lib/prisma';

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <main className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </main>
  );
}
