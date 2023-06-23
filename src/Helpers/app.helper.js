export const reorder = (filter, filtered) => { 
    var newDogs = [...filtered]; 
    const firstDog = newDogs[0];
    newDogs[0] = newDogs[1];
    newDogs[1] = newDogs[2]
    newDogs[2] = firstDog;
    filter(newDogs);
  }

  export const filterByName = (event, filter, dogs) => {
    const typedValue = event.target.value.toLowerCase();
    const newDogs =dogs.filter(dog=> dog.Name.toLowerCase().includes(typedValue));
     filter(newDogs)
  }