const persons = [
    {name: 'Legin', age: 26},
    {name: 'Dedi', age: 38},
    {name: 'Rozi', age: 15},
];

const adults = persons.filter((person) => {
    return person.age >= 18;
});

adults[0].age = 105;

console.log(adults);
console.log(persons);