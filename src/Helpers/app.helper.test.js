import { reorder } from './app.helper';
var mockDogs = [
    {name: "Opal"},
    {name: "Jerry"},
    {name: "Goofy"}

]

test('the reorder function has to change the position of all the elements', () => {
    let sut = [...mockDogs];
    const filter = (dogs) => {
        sut = dogs;
    }
    expect(sut[0].name).toBe("Opal");
    expect(sut[1].name).toBe("Jerry");
    expect(sut[2].name).toBe("Goofy");

    reorder (filter, sut)
  expect(sut[0].name).not.toBe("Opal");
  expect(sut[1].name).not.toBe("Jerry");
  expect(sut[2].name).not.toBe("Goofy");

});

test('the reorder function should work no matter the size of the array of elements', () => {
    let sut = [...mockDogs];
    const filter = (dogs) => {
        sut = dogs;
    }
    expect(sut[0].name).toBe("Opal");
    expect(sut[1].name).toBe("Jerry");
    expect(sut[2].name).toBe("Goofy");
    sut.push({name:"testdoggo"});
    expect(sut[3].name).toBe("testdoggo");

    reorder (filter, sut)
  expect(sut[0].name).not.toBe("Opal");
  expect(sut[1].name).not.toBe("Jerry");
  expect(sut[2].name).not.toBe("Goofy");
  expect(sut[3].name).not.toBe("testdoggo");

});