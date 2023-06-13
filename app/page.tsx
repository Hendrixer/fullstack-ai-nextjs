import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black ">
      <div className="w-full h-full flex justify-center items-center max-w-xl mx-auto">
        <div>
          <h1 className="text-6xl text-white/80 mb-6">
            Learn more about you from, you.
          </h1>
          <p className="text-xl text-white/60 mb-6">
            this is the description of the journal app to do shit. this is the
            description of the journal app to do shit. this is the description
            of the journal app to do shit.
          </p>
          <Link href="/journal">
            <button
              type="button"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
