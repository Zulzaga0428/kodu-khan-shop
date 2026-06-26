export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-32 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Build Your Dream
        </h1>
        <p className="max-w-xl text-lg text-zinc-400">
          KoDu — санаагаа 5 минутад бодит сайт болгоно.
        </p>
        <a
          href="#start"
          className="rounded-full bg-violet-600 px-6 py-3 font-medium hover:bg-violet-500"
        >
          Эхлэх
        </a>
      </section>
    </main>
  );
}
