import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <h2 className="">Indah</h2>
        <nav>
          <a href="">Home</a>
          <a href="">Gallery</a>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-body"></main>
    </>
  );
}
