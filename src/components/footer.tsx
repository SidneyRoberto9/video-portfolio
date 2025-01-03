import Link from "next/link"

import { links } from "@/data/socials"

const Footer = () => {
  return (
    <footer className="pb-8 text-center" id="socials">
      <div className="flex items-center justify-center space-x-4">
        {links.map(({ href, icon }, index) => (
          <Link
            href={href}
            key={index}
            className="transition duration-300 hover:opacity-45"
          >
            {icon}
          </Link>
        ))}
      </div>
      <p className="text-sm text-slate-100/50">sidneyrpsilva@gmail.com</p>
      <p className="text-sm text-slate-100/50">
        © Sidney. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
