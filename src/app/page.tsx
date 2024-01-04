import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/snippet/new"}>new</Link>
      This Is Home
    </div>
  );
}
