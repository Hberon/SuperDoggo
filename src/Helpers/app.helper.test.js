import { reorder } from './app.helper';
var mockDogs = [
    {name: "Opal"},
    {name: "Jerry"},
    {name: "Goofy"}

]
const filter = (dogs) => {
    mockDogs = dogs;
}
test('the reorder function has to change the position of all the elements', () => {
    expect(mockDogs[0].name).toBe("Opal");

    reorder (filter, mockDogs)
  expect(mockDogs[0].name).not.toBe("Opal");
});