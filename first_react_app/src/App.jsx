import React from 'react'
import "./App.css"
import MainBody from './components/MainBody'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  const name = "Mounika";
  const age = 25;
  const profession = "Software Engineer";
  const hobbies = ["Reading", "Traveling", "Cooking"];

  const handleClick = () => {
 
    const date = new Date();
    console.log(date);
    const time = date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
    
    alert(`Current Date and Time: ${time}`);
  }

  return (
  <div>

  <header>

       <h1>Welcome To My App</h1>
  </header>

  
<Header />


 
 <div class="bg-blue-800 text-white p-4 flex gap-8  justify-center " >

    <p style={{ fontWeight: 'bold' }}>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Profession: {profession}</p>
    <p>Hobbies: {hobbies.join(", ")}</p>

 </div>


<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 ml-12"
onClick={handleClick}>
  Click Me
</button>

<MainBody></MainBody>
<Footer></Footer>

   
  
  </div>
  )
}

export default App