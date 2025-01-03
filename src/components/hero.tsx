import { ArrowRight } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="pt-20">
      <div className="px-8 text-center">
        <div className="mb-6" data-aos="fade-down">
          <div className="relative inline-flex before:absolute before:inset-0">
            <Link
              href="https://twitter.com/BenVFXs"
              className="group inline-flex w-full items-center justify-center rounded-full border border-slate-100/40 px-3 py-1 text-sm font-medium text-zinc-300 transition duration-150 ease-in-out hover:text-white"
            >
              <span className="relative inline-flex items-center">
                My Socials{""}
                <span className="text-primary-500 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                  <ArrowRight className="size-4" />
                </span>
              </span>
            </Link>
          </div>
        </div>
        <h1
          className="bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-500 bg-clip-text pb-4 text-7xl font-extrabold tracking-tight text-transparent lg:text-8xl"
          data-aos="fade-down"
        >
          Edits Made Easy
        </h1>
        <p
          className="mb-8 text-lg text-zinc-300/40"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Transform your videos whit retention based editing
        </p>

        <div className="mx-auto flex max-w-xs flex-col items-center gap-4 sm:inline-flex sm:flex-row sm:justify-center">
          <Link
            href="#calednly"
            className="group flex w-full items-center justify-center whitespace-nowrap rounded bg-gradient-to-r from-white/80 via-white to-white/80 px-5 py-1.5 font-medium text-zinc-900 transition duration-150 ease-in-out hover:bg-white"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Book a free call {""}
            <ArrowRight className="text-primary-500 ml-1 size-3 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
