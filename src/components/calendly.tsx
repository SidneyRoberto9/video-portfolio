import { InlineWidget } from "react-calendly"

import { Separator } from "@/components/ui/separator"

const Calendly = () => {
  return (
    <div className="text-center" id="calendly">
      <h1 className="pb-4 text-4xl font-bold tracking-tight lg:text-5xl">
        Ready to Transform Your Content? <br /> Book a Free Editing Consultation
        Below!
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 h-0.5 w-40 bg-slate-100/20" />
      </div>
      <InlineWidget
        url="https://calendly.com/sidneyrpsilva/30min?month=2025-01"
        styles={{ height: "62.5rem", borderRadius: "0.3125rem" }}
      />
    </div>
  )
}

export default Calendly
