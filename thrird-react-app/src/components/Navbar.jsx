import React from 'react'
import Link from './shared/Link'


function Navbar() {

    
  return (
    <div className='flex gap-4 w-[50%] bg-yellow-400 h-[10vh] m-auto'>

     <Link src="/home" linkText="Home"></Link>
     <Link  src="/aboutus" linkText="About Us"></Link>
     <Link src="/contact" linkText="Contact US"></Link>
     <Link src="/services"  linkText="Services"></Link>
     
  

    </div>
  )
}

export default Navbar