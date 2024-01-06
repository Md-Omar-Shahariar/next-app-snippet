import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/snippet/new"}>new</Link>
      <br />
      This Is Home
    </div>
  );
}
