import React from 'react'

function Header() {
  return (
    <div class="bg-red-800 text-white p-4 flex justify-between items-center mt-10 mb-10  rub">

        <a href="/" class="text-white hover:underline ml-12 mr-13">Home</a> 
        <a href="/about" class="text-white hover:underline  ml-12 mr-12">About</a>
        <a href="/contact" class="text-white hover:underline  ml-12 mr-12">Contact</a>
        <a href="/services" class="text-white hover:underline  ml-12 mr-12">Services</a>
    </div>
  )
}

export default Header