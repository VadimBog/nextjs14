import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Hi</h1>
      <Link href="/about">About the Project</Link>
    </main>
  );
}
