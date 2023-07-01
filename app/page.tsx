import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <h1>main</h1>
      <button>
        <Link href="/dashboard/menu">Dashboard</Link>
      </button>
    </main>
  );
}
