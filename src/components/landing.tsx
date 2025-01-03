"use client"

import "aos/dist/aos.css"

import AOS from "aos"
import { useEffect } from "react"

import EditedShorts from "@/components/edited-shorts"
import EditedVideos from "@/components/edited-videos"
import Hero from "@/components/hero"

const Landing = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div>
      <div className="relative mx-auto min-h-screen max-w-5xl space-y-80 px-4 pb-16 pt-32 sm:px-6 md:pb-32 md:pt-52">
        <Hero />
        <EditedVideos />
        <EditedShorts />
        {/* Edited Videos Shorts */}
        {/* Channels Worked With */}
        {/* Calendly Booking Page */}
      </div>
      {/* Footer */}
    </div>
  )
}

export default Landing
