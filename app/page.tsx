import Image from "next/image";

export default function Home() {
  return (
    <main className="w-auto min-h-screen flex items-center justify-center bg-black">
      <div className="w-60 animate-breathe">
        <a href="https://www.trabzonspor.org.tr" title="Trabzonspor">
          <Image
            src="/trabzonspor-blue.png"
            alt="Trabzonspor logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            loading="eager"
          />
        </a>
      </div>
    </main>
  );
}
