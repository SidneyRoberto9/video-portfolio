import YouTube from "react-youtube"

import { Separator } from "@/components/ui/separator"

const EditedVideos = () => {
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
        Videos I've Created
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 h-0.5 w-40 bg-slate-100/20" />
      </div>

      <div className="flex justify-center">
        <div className="pointer-events-none mt-10 grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          <YouTube opts={videoOptions} videoId="Z9zM68Pw_0k" />
          <YouTube opts={videoOptions} videoId="_6fQAobVr2Y" />
          <YouTube opts={videoOptions} videoId="lOpCTomOi1I" />
          <YouTube opts={videoOptions} videoId="CtFZQFveurQ" />
        </div>
      </div>
    </div>
  )
}

export default EditedVideos
