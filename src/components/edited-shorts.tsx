import YouTube from "react-youtube"

import { Separator } from "@/components/ui/separator"

const EditedShorts = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showInfo: 0,
      mute: 1,
      loop: 1,
    },
    width: "480",
    height: "270",
    className: "rounded-xl",
  }

  return (
    <div className="text-center">
      <h1 className="pb-4 text-5xl font-bold tracking-tight lg:text-6xl">
        Shorts I've Created
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 h-0.5 w-40 bg-slate-100/20" />
      </div>

      <div className="flex justify-center">
        <div className="pointer-events-none mt-10 grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          <YouTube opts={videoOptions} videoId="ul5hF4gPRGI" />
          <YouTube opts={videoOptions} videoId="Ci1lJ0-Xt20" />
          <YouTube opts={videoOptions} videoId="pG3qdPerUTk" />
          <YouTube opts={videoOptions} videoId="k6_QykcUl6k" />
        </div>
      </div>
    </div>
  )
}

export default EditedShorts