const persons = [
    {name: 'Legin', age: 26},
    {name: 'Dedi', age: 38},
    {name: 'Rozi', age: 15},
];

const adult = persons.find((person) => {
    return person.age >= 118;
});

console.log(adult);