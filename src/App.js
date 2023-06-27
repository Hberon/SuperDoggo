import logo from './logo.svg';
import './App.css';
import Tutor from './Features/Tutor';
import Box from './Base/Box';
import BadgeSouthAfrica from './Resources/Images/ZA.png';
import BadgeUN from './Resources/Images/082-united-nations.png';
import BadgeAU from './Resources/Images/AU.png';
import React, { useState, useEffect } from "react";
import { reorder, filterByName } from './Helpers/app.helper';



function App() {
  var dogs = [
    {Name: "Opal", Description: "Hi I'm Opal and I like to eat poop and play at the dog park. I DO NOT like closed doors.", avatarSrc: "https://petlandkennesaw.com/wp-content/uploads/2022/06/Poodle-300x300.png", badgeSrc: BadgeAU}, 
    {Name: "Filo", Description: "Hello peasants, I am your god forsaken leader. Bow down to me, imbeciles", avatarSrc: "https://www.petlandhoffmanestates.com/wp-content/uploads/2021/11/pug-300x300.png", badgeSrc: BadgeUN}, 
    {Name: "Luna", Description: "Haiiiiii, I'm Luna and I love everything and everyone.", avatarSrc: "https://breed-assets.wisdompanel.com/dog/rottweiler/Rottweiler1.png", badgeSrc: BadgeSouthAfrica}, 
];
const [filtered, filter] = useState(dogs);

useEffect(()=>{
  const interval = setInterval(()=>{
  reorder (filter, [...filtered]);
  },30000);
  return ()=>clearInterval(interval);
  
},[filtered]); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <p>
          filter by name
          <input type = "text" onChange={(e)=> filterByName(e, filter, dogs)}/>
          <button onClick={()=> reorder (filter, filtered)}>Reorder</button>
          </p>
        </div>
        <div
        >
          {
            filtered.map(dog => 
              <Box>
              <Tutor name = {dog.Name}
              description = {dog.Description}
              avatarSrc = {dog.avatarSrc}
              badgeSrc = {dog.badgeSrc}
              /> 
            </Box>
             )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
