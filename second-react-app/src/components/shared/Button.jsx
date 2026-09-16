import React from 'react'
import '../../App.css'
import {UserPlus} from 'lucide-react';

function Button({ children = "Button",theme,buttonicon:ButtonIcon}) {
  if (theme === 'one')
        return (
            <button className='flex items-center gap-2 bg-indigo-500 text-white font-medium px-8 py-2.5 
            rounded-lg transition duration-500 hover:scale-110 hover:bg-indigo-800'>
                {children}
             {ButtonIcon && <ButtonIcon size="18" />}
            </button>
        )

    if (theme === 'two')
        return (
            <button className='flex items-center gap-2 bg-blue-500 text-white font-medium px-8 py-2.5 
            rounded-lg transition duration-500 hover:scale-110 hover:bg-blue-800'>
                {children}
            </button>
        )

    if (theme === 'three')
        return (
            <button className='flex items-center gap-2 bg-red-500 text-white font-medium px-8 py-2.5 
            rounded-lg transition duration-500 hover:scale-110 hover:bg-red-800'>
                {children}
            </button>
        )

    if (theme === 'four')
        return (
            <button className='flex items-center gap-2 bg-green-500 text-white font-medium px-8 py-2.5 
            rounded-lg transition duration-500 hover:scale-110 hover:bg-green-800'>
                {children}
            </button>
        )
}

export default Button