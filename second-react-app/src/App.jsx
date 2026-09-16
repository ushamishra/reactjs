
import './App.css'
import Card from './components/Card'

import {UserPlus,Settings, Info, Contact } from 'lucide-react';


function App() {
 
  return (

    <div className='flex flex-nowrap gap-4 mt-20 mr-20 ml-20'>
         <Card buttonText="Register now" theme="one" >Create your project · Install Tailwind CSS · Configure Vite Plugin · Import Tailwind CSS · Start your build process · Start using Tailwind in your project.</Card>
         <Card buttonText="About Me" theme="two">If your local extension store UI is glitching or lagging, you can force the installation directly using the VS Code console:</Card>
         <Card buttonText="Contact" theme="three">Are you using a cloud environment (like Posit Workbench or Gitpod)? These platforms use an open-source registry (Open VSX) rather than the official Microsoft Marketplace. Search for PHP Tools or PHP Extension Pack instead, as they are fully indexed there. [1] (https://support.posit.co/hc/en-us/articles/30809946887319-VS-Code-Marketplace-extensions-not-available-in-VSCode-on-Posit-Workbench)</Card>
         <Card buttonText="Visit NearBy Store" theme="four">Once you try searching for Intelephense or running the ext install command, let me know if it downloads successfully or if you run into an installation error!</Card> 


{/* <div>

  <button style={{ color: "white",backgroundColor: "red",margin:"20px"}}>
  <UserPlus size="20"/>
  Register here
</button>

  <button style={{ color: "white",backgroundColor: "red",margin:"20px" }}>
  <Settings size="20"/>
 Change Setting
</button>

<button style={{ color: "white",backgroundColor: "red",margin:"20px" }}>
  <Info size="20"/>
About Me
</button>

<button style={{ color: "white",backgroundColor: "red",margin:"20px" }}>
  <Contact size="20"/>
Contact Us
</button>
</div> */}


    </div>

   
  )
}

export default App
