import React from 'react'

function Link(props) {
   const Icon = props.icon;
  return (
   
    <div id={props.id} className='w-fit bg-blue-500 text-white m-auto border-2 border-red-300 rounded-2xl  p-2 transition duration-500 hover:scale-110 hover:bg-blue-800  '>

       { Icon && <Icon size="15"/>}
        <a  href={props.src} >
          {props.linkText} 
        </a>
    </div>
  )
}

export default Link