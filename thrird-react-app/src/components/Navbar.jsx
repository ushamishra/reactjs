import React from 'react'
import Link from './shared/Link'
import { Home, Info, Phone, Briefcase, Boxes, Map } from 'lucide-react'


function Navbar() {

  const linkData = [
    {
      src: "/home",
      linkText: "Home",
      icon: Home
    },
    {
      src: "/aboutus",
      linkText: "About Us",
      icon: Info
    },
    {
      src: "/contact",
      linkText: "Contact US",
      icon: Phone

    },
    {
      src: "/services",
      linkText: "Services",
      icon: Briefcase
    },
    {
      src: "/products",
      linkText: "Products",
      icon: Boxes


    },
    {
      src: "/maplocation",
      linkText: "Map Location",
      icon: Map
    }


  ]

  const linkfunction = (item, index) => {

    return <Link id={index} src={item.src} linkText={item.linkText} icon={item.icon}></Link>

  }

  return (
    <div className='flex gap-10  w-fit bg-yellow-400 h-[10vh] m-auto '>

      {

        linkData.map((item, index) => linkfunction(item, index))


      }






    </div>
  )
}

export default Navbar