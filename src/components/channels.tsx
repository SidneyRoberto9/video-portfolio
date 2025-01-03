import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { channels, styled } from "@/data/channels"
import { Avatar } from "@mui/material"

const Channels = () => {
  return (
    <div className="text-center">
      <h1 className="pb-4 text-5xl font-bold tracking-tight lg:text-6xl">
        Channels I've Worked With
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 h-0.5 w-40 bg-slate-100/20" />
      </div>

      <div className="mx-auto flex items-center justify-center sm:space-x-4 lg:space-x-8">
        {channels.map(({ link, logo, name, subs }, index) => (
          <div key={index} className="mt-10 flex">
            <div className="flex flex-col items-center">
              <Link href={link}>
                <Avatar src={logo} alt={name} sx={styled} />
              </Link>
              <h1 className="mt-4 text-xl font-semibold">{name}</h1>
              <p className="mt-2 text-lg">{subs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Channels
