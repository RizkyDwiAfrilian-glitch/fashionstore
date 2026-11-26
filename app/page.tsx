
'use client';
import Link from "next/link";

function Home() {
  return (
    <div className="bg-home bg-cover bg-center min-h-screen">
      <div className="mx-auto max-w-7xl px-5 py-10">

        <section className="grid items-center gap-10 rounded-3xl 
          border border-white/50 bg-white/70 p-8 
          shadow-2xl backdrop-blur-md md:grid-cols-2 md:p-12">

          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight 
              text-black md:text-5xl">
              Welcome to KyStore
            </h1>
            <h2 className="mt-4 text-sm font-bold tracking-[3px] text-black">
              YOUR STYLE, YOUR IDENTITY.
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600">
              Discover the latest fashion trends and find your own style.
              From timeless essentials to bold statement pieces, explore
              a collection designed to make you stand out.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Your one-stop shop for the latest fashion trends.
            </p>

            <Link
              href="/store"
              className="mt-8 inline-flex items-center gap-3 rounded-xl 
              bg-black px-9 py-4 text-lg font-semibold text-white 
              shadow-lg transition duration-300 hover:scale-105 
              hover:bg-gray-800"
            >
              Shop Now
            </Link>

          </div>

          {/* BAGIAN IMAGE */}
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/e5/fe/87/e5fe87178a53c94d5dc6ea0607a9d505.jpg"
              alt="KyStore Fashion Collection"
              className="h-72 w-full rounded-2xl object-cover 
              shadow-xl md:h-[420px]"
            />
          </div>

        </section>
      </div>
    </div>
  );
}

export default Home;
