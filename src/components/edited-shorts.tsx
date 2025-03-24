"use client"

import YouTube from 'react-youtube';

import { Separator } from '@/components/ui/separator';
import { shortsIds, videoOptions } from '@/data/videos';
import useWindowSize from '@/hooks/useWindowSize';

const EditedShorts = () => {
  const { width, height } = useWindowSize()

  const opts = {
    ...videoOptions,
    width: width < 640 ? "100%" : "480",
    height: height < 640 ? "100%" : "270",
  }

  return (
    <div className="text-center">
      <h1 className="pb-4 text-5xl font-bold tracking-tight lg:text-6xl">
        Shorts I Liked
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 h-0.5 w-40 bg-slate-100/20" />
      </div>

      <div className="flex justify-center">
        <div className="mt-10 grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
          {shortsIds.map((video, index) => (
            <YouTube key={index} videoId={video} opts={opts} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EditedShorts
