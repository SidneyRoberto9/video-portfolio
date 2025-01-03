"use client"

import "aos/dist/aos.css"

import AOS from "aos"
import { Fragment, useEffect } from "react"

import Channels from "@/components/channels"
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
    <Fragment>
      <section className="relative mx-auto min-h-screen max-w-5xl space-y-80 px-4 pb-16 pt-32 sm:px-6 md:pb-32 md:pt-52">
        <Hero />
        <EditedVideos />
        <EditedShorts />
        <Channels />
      </section>
      {/* Footer */}
    </Fragment>
  )
}

export default Landing
