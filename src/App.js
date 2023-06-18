import logo from './logo.svg';
import './App.css';
import Tutor from './Features/Tutor';
import Box from './Base/Box';
import BadgeSouthAfrica from './Resources/Images/ZA.png';
import BadgeUN from './Resources/Images/082-united-nations.png';
import BadgeAU from './Resources/Images/AU.png';
import React, { useState } from "react";


function App() {
  var dogs = [
    {Name: "Opal", Description: "Hi I'm Opal and I like to eat poop and play at the dog park. I DO NOT like closed doors.", avatarSrc: "https://petlandkennesaw.com/wp-content/uploads/2022/06/Poodle-300x300.png", badgeSrc: BadgeAU}, 
    {Name: "Filo", Description: "Hello peasants, I am your god forsaken leader. Bow down to me, imbeciles", avatarSrc: "https://www.petlandhoffmanestates.com/wp-content/uploads/2021/11/pug-300x300.png", badgeSrc: BadgeUN}, 
    {Name: "Luna", Description: "Haiiiiii, I'm Luna and I love everything and everyone.", avatarSrc: "https://breed-assets.wisdompanel.com/dog/rottweiler/Rottweiler1.png", badgeSrc: BadgeSouthAfrica}, 
];
const [filtered, filter] = useState(dogs);
const filterByName = (event) => {
 
  const typedValue = event.target.value.toLowerCase();
  const newDogs =dogs.filter(dog=> dog.Name.toLowerCase().includes(typedValue));
   filter(newDogs)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          filter by name
          <input type = "text" onChange={(e)=> filterByName(e)}/>
        </p>
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
