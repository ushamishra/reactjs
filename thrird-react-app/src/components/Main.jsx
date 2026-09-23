import React, { useRef } from 'react'

function Main() {

   const paragraphRef = useRef()

   const changeColor = () =>{

    const paragraph = paragraphRef.current;
     paragraph.style.color="red"
     paragraph.style.fontWeight ="bold"

   }
  return (
    <div className='mt-20 ml-20 mr-20 '>

        <h1 ref={paragraphRef} className='f-20'>This is a Useref command</h1>

     <p ref={paragraphRef}>The best meetings keep you engaged—not buried in notes. With My Notes, collect your ideas, action items, and momentum across meeting platforms.The best meetings keep you engaged—not buried in notes. With My Notes, collect your ideas, action items, and momentum across meeting platforms.The best meetings keep you engaged—not buried in notes. With My Notes, collect your ideas, action items, and momentum across meeting platforms.The best meetings keep you engaged—not buried in notes. With My Notes, collect your ideas, action items, and momentum across meeting platforms.</p>
   

     <div className='m-auto'>
           <button className='bg-blue-600 text-white' onClick={changeColor} >Change color</button>
     </div>
 
    
    </div>
  )
}

export default Main