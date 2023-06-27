export const reorder = (filter, filtered) => { 
  const newArray = filtered.slice(); 
  for (let i = 0; i < newArray.length-1; i++) {
    [newArray[i], newArray[i+1]] = [newArray[i+1], newArray[i]];
  }
  filter(newArray);
  }

  export const filterByName = (event, filter, dogs) => {
    const typedValue = event.target.value.toLowerCase();
    const newDogs =dogs.filter(dog=> dog.Name.toLowerCase().includes(typedValue));
     filter(newDogs)
  }

  